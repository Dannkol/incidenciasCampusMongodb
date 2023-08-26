import equipos from '../module/equipo.js';

import { validationResult } from "express-validator";

const getAllEquipos = async (req, res) => {

  try {

    const query = await equipos.getAllEquipos();


    res.json({ query });
    
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getAllEquiposMarcas = async (req, res) => {

  try {

    const query = await equipos.getAllEquiposMarcas(Object.values(req.params));


    res.json({ query });
    
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createEquipo = async (req, res) => {
  try {
    
    const result = validationResult(req);
    if (result.isEmpty()) {

        const query = await equipos.createEquipo(req.body);
        res.json( query );

    }else{
        res.send({ errors: result.array() });
    }



    
  } catch (error) {
    res.status(404).json({ 
      "message" : `Error creating ${error.sqlState}` 
    });
    console.log(error);

  }
}

export { getAllEquipos , getAllEquiposMarcas , createEquipo } ;