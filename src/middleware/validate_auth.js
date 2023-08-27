import { body, header } from "express-validator";

import { mongoConn, getDB } from "../config/dbconfig.js";

async function version(version, data) {
  const client = await mongoConn();
  try {
    const db = getDB("incidensias");
    const collection = db.collection("versiones");
    const aggregation = [
      {
        $lookup: {
          from: "usuarios", 
          localField: "id_usuario", 
          foreignField: "id", 
          as: "usuario_info", 
        },
      },
      {
        $unwind: "$usuario_info", 
      },
      {
        $match: {
          "usuario_info.nombre": data.nombre,
          "usuario_info.email":  data.email,
        },
      },
      {
        $project: {
          _id: 0, 
          "usuario_info.nombre": 1, 
          "usuario_info.password": 1, 
          "versiones" : 1
        },
      },
    ];

    const result = await collection.aggregate(aggregation).toArray();

    return result[0].versiones === version;
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

const auth_validator = [
  body("nombre").notEmpty().withMessage("El nombre es necesario"),
  body("email").notEmpty().withMessage("El email es necesario"),
  header("accept-version")
    .notEmpty()
    .withMessage("version no especificada")
    .custom(async (value, { req }) => {
      if (value) {
        const promises = [];
        promises.push(version(value, req.body));

        const results = await Promise.all(promises);

        // Verificar si todas las consultas a la base de datos fueron exitosas
        results.forEach((data) => {
          if (!data) {
            throw new Error("Notiene permisos para esta version");
          }
        });
        return true
      }
    }),
];

export { auth_validator };
