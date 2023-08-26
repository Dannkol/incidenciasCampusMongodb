import { body } from "express-validator";

import { ObjectId } from "mongodb";

import { mongoConn, getDB } from "../config/dbconfig.js";

async function findOne(id, collection) {
  await mongoConn();
  try {
    const db = getDB("incidensias");
    const colecc = db.collection(collection);

    const result = await colecc.findOne({ _id: id });

    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}

const createEquipo = [
  body("nombre_equipo")
    .notEmpty()
    .withMessage("nombre del equipo es requerido"),
  body("descripcion")
    .notEmpty()
    .withMessage("descripcion del equipo es requerido"),
  body("lugar")
    .notEmpty()
    .withMessage("lugar es requerido")
    .custom(async (value) => {
      if (value) {
        const promises = [];
        promises.push(findOne(new ObjectId(value), "lugares_areas"));

        const results = await Promise.all(promises);

        // Verificar si todas las consultas a la base de datos fueron exitosas
        results.forEach((data) => {
          if (!data) {
            throw new Error("ID de mouse no válido");
          }
        });
      }
    })
    .customSanitizer((value) => {
      try {
        return new ObjectId(value);
      } catch (error) {
        return value;
      }
    }),
  body("accesorios").notEmpty().withMessage("Accesorios es requierido"),
  body("accesorios.mouse")
    .notEmpty()
    .withMessage("mouse_id es obligatorio")
    .custom(async (value) => {
      if (value) {
        const promises = [];
        promises.push(findOne(new ObjectId(value), "accesorio_mouse"));

        const results = await Promise.all(promises);

        // Verificar si todas las consultas a la base de datos fueron exitosas
        results.forEach((data) => {
          if (!data) {
            throw new Error("ID de mouse no válido");
          }
        });
      }
    })
    .customSanitizer((value) => {
      try {
        return new ObjectId(value);
      } catch (error) {
        return value;
      }
    }),
  body("accesorios.teclado")
    .notEmpty()
    .withMessage("teclado es obligatorio")
    .custom(async (value) => {
      if (value) {
        const promises = [];
        promises.push(findOne(new ObjectId(value), "accesorio_teclado"));

        const results = await Promise.all(promises);

        // Verificar si todas las consultas a la base de datos fueron exitosas
        results.forEach((data) => {
          if (!data) {
            throw new Error("ID de mouse no válido");
          }
        });
      }
    })
    .customSanitizer((value) => {
      try {
        return new ObjectId(value);
      } catch (error) {
        return value;
      }
    }),
  body("accesorios.diademas")
    .notEmpty()
    .withMessage("diademas es obligatorio")
    .custom(async (value) => {
      if (value) {
        const promises = [];
        promises.push(findOne(new ObjectId(value), "accesorio_diademas"));

        const results = await Promise.all(promises);

        // Verificar si todas las consultas a la base de datos fueron exitosas
        results.forEach((data) => {
          if (!data) {
            throw new Error("ID de mouse no válido");
          }
        });
      }
    })
    .customSanitizer((value) => {
      try {
        return new ObjectId(value);
      } catch (error) {
        return value;
      }
    }),
];

export { createEquipo };
