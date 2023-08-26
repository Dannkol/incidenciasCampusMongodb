import { ObjectId } from "mongodb";
import diademas from "../module/diademas.js";

const getAllDiademas = async (req, res) => {
    try {
        const getAllDiademas = await diademas.getAllDiademas();
        res.status(200).json({
            messeger : "All diademas",
            data : getAllDiademas
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }finally{
        res.end();
    }
}


const updateDiademas = async (req, res) => {
    try {

        const updateDiademas = await diademas.updateDiademas(req.body, req.params.id)

        res.status(200).json({
            messeger : "Update diademas",
            data : updateDiademas
        });

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const createDiadema = async (req, res) => {
    try {
        const id = new ObjectId()
        const data = {
            _id : id,
            id: id,
            marca: req.body.marca,
            description: req.body.description,
        }
        const createDiadema = await diademas.createDiadema(data);
        res.status(200).json({
            messeger : "Create diademas",
            data : createDiadema
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const deleteDiadema = async (req, res) => {
    try {
        const deleteDiadema = await diademas.deleteDiadema(req.params.id);
        res.status(200).json({
            messeger : "Delete diademas",
            data : deleteDiadema
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            messeger : `Error deleting ${error.sqlState}`
        });
    }
}

export { createDiadema, deleteDiadema , updateDiademas, getAllDiademas }