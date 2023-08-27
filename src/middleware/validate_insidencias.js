import { body, header } from "express-validator";

import { mongoConn, getDB } from "../config/dbconfig.js";

import { ObjectId } from "mongodb";

// {
//     id: 1,
//     nombre: "No enciende",
//     descripcion:
//       "El camper daniel comento que el pc no encencia, una primera comprovacion muesta que es verdad",
//     equipo_id: 1,
//     lugar_id: 1,
//     user_id : 1,
//     fecha: new Date("2023-07-15"),
//     nivel: 8,
//     categoria: "hardware"
// }

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
          "usuario_info.email": data.email,
        },
      },
      {
        $project: {
          _id: 0,
          "usuario_info.nombre": 1,
          "usuario_info.password": 1,
          versiones: 1,
        },
      },
    ];

    const result = await collection.aggregate(aggregation).toArray();
    console.log(
      "verisones",
      result[0].versiones === version,
      version,
      result[0].versiones
    );
    return result[0].versiones === version;
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

async function findOne(id, collection) {
  await mongoConn();
  try {
    const db = getDB("incidensias");
    const colecc = db.collection(collection);

    const result = await colecc.findOne({
      $or: [{ _id: new ObjectId(id) }, { id: id }],
    });

    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}

const validar_insidencias = [
  body("nombre").notEmpty().withMessage("nombre es requerido"),
  body("descripcion").notEmpty().withMessage("descripcion es requerido"),
  body("equipo_id")
    .notEmpty()
    .withMessage("equipo_id es requerido")
    .custom(async (value) => {
      if (value) {
        const promises = [];
        promises.push(findOne(value, "equipos"));

        const results = await Promise.all(promises);

        // Verificar si todas las consultas a la base de datos fueron exitosas
        results.forEach((data) => {
          if (!data) {
            throw new Error("equipo no existe");
          }
        });
        return true;
      }
    })
    .customSanitizer((value) => new ObjectId(value)),
  body("lugar_id")
    .notEmpty()
    .withMessage("lugar_id es requerido")
    .custom(async (value) => {
      if (value) {
        const promises = [];
        promises.push(findOne(value, "lugares"));

        const results = await Promise.all(promises);

        // Verificar si todas las consultas a la base de datos fueron exitosas
        results.forEach((data) => {
          if (!data) {
            throw new Error("lugar no existe");
          }
        });
        return true;
      }
    })
    .customSanitizer((value) => new ObjectId(value)),
  body("fecha")
    .notEmpty()
    .withMessage("fecha es requerido")
    .isISO8601()
    .withMessage("fecha no valida")
    .customSanitizer((value) => new Date(value)),
  body("nivel")
    .notEmpty()
    .withMessage("nivel es requerido")
    .isNumeric()
    .withMessage("nivel debe ser un numero")
    .customSanitizer((value) => parseInt(value)),
  body("categoria").notEmpty().withMessage("categoria es requerido"),
  header("accept-version")
    .notEmpty()
    .withMessage("No ah especificado una verison")
    .custom(async (value, { req }) => {
      if (req.user.rol !== 2)
        throw new Error("Notiene permisos para esta realizar esta accion");
      if (value) {
        const promises = [];
        promises.push(version(value, req.user));

        const results = await Promise.all(promises);

        // Verificar si todas las consultas a la base de datos fueron exitosas
        results.forEach((data) => {
          if (!data) {
            throw new Error("Notiene permisos para esta version");
          }
        });
        return true;
      }
    }),
];

export { validar_insidencias };
