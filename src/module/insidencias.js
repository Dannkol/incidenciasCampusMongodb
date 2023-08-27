import { mongoConn, getDB } from "../config/dbconfig.js";

async function incidensia(data) {
    const client = await mongoConn();
    try {
        const db = getDB('incidensias');
        const collection = db.collection('insidencias');

        const incidensia = await collection.insertOne(data)

        console.log(incidensia);

        return {
            data: data,
            message: "insidencias successfully"
        }
    } catch (error) {
        console.error(error.errInfo.details.schemaRulesNotSatisfied[0].propertiesNotSatisfied);
    } finally {
        await client.close();
    }
}

async function getincidensia() {
    const client = await mongoConn();
    try {
        const db = getDB('incidensias');
        const collection = db.collection('insidencias');
        const aggregation = [
            {
              $lookup: {
                from: "lugares",
                localField: "lugar_id",
                foreignField: "_id",
                as: "lugar",
              },
            },
            {
              $lookup: {
                from: "equipos",
                localField: "equipo_id",
                foreignField: "_id",
                as: "equipo",
              },
            },
            {
              $lookup: {
                from: "usuarios",
                localField: "user_id",
                foreignField: "_id",
                as: "usuario",
              },
            },
            {
              $project: {
                _id: 0,
                nombre: 1,
                descripcion: 1,
                lugar: { $arrayElemAt: ["$lugar.nombre", 0] },
                equipo: { $arrayElemAt: ["$equipo.nombre", 0] },
                usuario: { $arrayElemAt: ["$usuario.nombre", 0] },
                fecha: 1,
                nivel: 1,
                categoria: 1,
              },
            },
          ];
          
          const result = await collection.aggregate(aggregation).toArray();
          

        return {
            data: result,
            message: "insidencias All"
        }
    } catch (error) {
        console.error(error.errInfo.details.schemaRulesNotSatisfied[0].propertiesNotSatisfied);
    } finally {
        await client.close();
    }
}

export {incidensia , getincidensia}