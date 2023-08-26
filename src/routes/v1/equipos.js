import express from "express";

import { getAllDiademas, createDiadema, updateDiademas, deleteDiadema} from "../../controller/ControllerDiademas.js";
import { getAllEquipos , getAllEquiposMarcas, createEquipo } from "../../controller/ControllerEquipos.js";

// Middleware equipos

import { createEquipo as validate_equipos } from "../../middleware/validate_equipos.js";


const routas_eqioposv1 = express.Router();

// Crud Diademas
routas_eqioposv1.get("/diademas/", getAllDiademas);
routas_eqioposv1.post("/diademas/", createDiadema);
routas_eqioposv1.put("/diademas/:id", updateDiademas);
routas_eqioposv1.delete("/diademas/:id", deleteDiadema);

// Equipos
routas_eqioposv1.get("/" , getAllEquipos)
routas_eqioposv1.get("/:marca", getAllEquiposMarcas)
routas_eqioposv1.post("/create", validate_equipos , createEquipo);

export default routas_eqioposv1;