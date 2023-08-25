import express from "express";

import { getAllDiademas, createDiadema, updateDiademas, deleteDiadema} from "../../controller/ControllerDiademas.js";


const routas_eqioposv1 = express.Router();

routas_eqioposv1.get("/diademas/", getAllDiademas);
routas_eqioposv1.post("/diademas/", createDiadema);
routas_eqioposv1.put("/diademas/:id", updateDiademas);
routas_eqioposv1.delete("/diademas/:id", deleteDiadema);

export default routas_eqioposv1;