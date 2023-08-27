import { ObjectId } from "mongodb";
import { getincidensia , incidensia } from "../module/insidencias.js";
import { validationResult } from "express-validator";

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

const createInsidencias = async (req, res, next) => {
  const iDincidensia = new ObjectId();
  try {
    const result = validationResult(req);
    if (result.isEmpty()) {
      const data = {
        _id: iDincidensia,
        id: iDincidensia,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        equipo_id: req.body.equipo_id,
        lugar_id: req.body.lugar_id,
        user_id: new ObjectId(req.user.id),
        fecha: req.body.fecha,
        nivel: req.body.nivel,
        categoria: req.body.categoria,
      };

      const result = await incidensia(data)

      console.log(data);
      res.status(200).json(result);
    }else{
        res.send({ errors: result.array() });
    }
    
  } catch (error) {
    console.error(error);
  } finally {
    res.end();
  }
};

const findInsidencias = async (req, res) =>{
    try {
        const result = await getincidensia();
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
    } finally {
        res.end();
    }
}

export {createInsidencias , findInsidencias};
