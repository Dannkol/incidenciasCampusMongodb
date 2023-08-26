import { ObjectId } from 'mongodb';
import { mongoConn, getDB } from '../config/dbconfig.js'


async function getAllEquipos() {
    const client = await mongoConn();
    try {
        const db = getDB('incidensias');
        const collection = db.collection('equipos');
        const result = await collection.find({}).toArray();
        return result;
    } catch (error) {
        console.error('Error al obtener todos los equipos:', error);
        throw error;
    }finally{
        await client.close();
    }
}

async function getAllEquiposMarcas(data) {
    const client = await mongoConn();
    try {
        const collection = db.collection('equipos');
        const result = await collection.find({
            $or: [
                { 'marca_diadema': { $in: data } },
                { 'marca_mouse': { $in: data } },
                { 'marca_teclado': { $in: data } },
            ],
        }).toArray();
        return result;
    } catch (error) {
        console.error('Error al obtener equipos por marcas:', error);
        throw error;
    }
}

async function createEquipo(req) {
    const client = await mongoConn();
    try {
        const idequipo = new ObjectId()
        const idacc_lugar = new ObjectId()

        const db = getDB('incidensias');

        const dataequipo = {
            "_id" : idequipo,
            "id" : idequipo,
            "nombre": req.nombre_equipo,
            "description": req.descripcion,
            "lugar_id": req.lugar,
        }

        const dataAcc_lugar = {
            "_id": idacc_lugar,
            "id": idacc_lugar,
            "equipos_id": idequipo,
            "accesorios_mouse_id": req.accesorios.mouse,
            "accesorios_teclado_id": req.accesorios.teclado,
            "accesorios_diademas_id":  req.accesorios.diademas
        }

        console.log(dataequipo);
        console.log(dataAcc_lugar);

        const collectionEqupipo = db.collection('equipos');
        await collectionEqupipo.insertOne(dataequipo);
        const collectionAcc_Lugar = db.collection('equipos_acc_lugar')
        await collectionAcc_Lugar.insertOne(dataAcc_lugar)
        return { message: 'Equipo creado con éxito' };
    } catch (error) {
        console.error('Error al crear equipo:', error.errInfo.details.schemaRulesNotSatisfied[0].propertiesNotSatisfied[0].details);
        return { message: `Error al crear equipo: ${error.message}` };
    }finally{
        await client.close();
    }
}

export default { getAllEquipos, getAllEquiposMarcas , createEquipo }