import { mongoConn, getDB } from "../config/dbconfig.js";

const getAllDiademas = async () => {
  const connection = await mongoConn();
  try {
    const db = getDB("incidensias");
    const collection = db.collection("accesorio_diademas");
    const query = await collection
      .find(
        {},
        { projection: { _id: 0, id: 1, marca: 1, descripcion: 1, serial: 1 } }
      )
      .toArray();

    return query;
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    await connection.close();
  }
};

const updateDiademas = async (data, id) => {
  const connection = await mongoConn();
  try {
    const db = getDB("incidensias");
    const collection = db.collection("accesorio_diademas");

    // Construir el filtro para la actualización
    const filter = { $or: [{ id: id[0] }, { _id: id[0] }] };

    // Construir el objeto de actualización
    const update = { $set: data };

    const result = await collection.updateOne(filter, update);

    if (result.modifiedCount > 0) {
      return data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    await connection.close();
  }
};

const createDiadema = async (data) => {
  const connection = await mongoConn();
  try {
    console.log(data);
    const db = getDB("incidensias");
    const collection = db.collection("accesorio_diademas");

    await collection.insertOne(data);

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    await connection.close();
  }
};

const deleteDiadema = async (id) => {
  const connection = await mongoConn();
  try {
    const db = getDB("incidensias");
    const collection = db.collection("accesorio_diademas");

    const result = await collection.deleteOne({ id: id[0] });

    return result.deletedCount;
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    await connection.close();
  }
};

export default { getAllDiademas, deleteDiadema, updateDiademas, createDiadema };
