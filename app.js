import express  from "express";

import routesVersioning  from 'express-routes-versioning';

import routas_eqioposv1 from "./src/routes/v1/equipos.js"

import auth_v1 from "./src/routes/v1/auth.js";

import dotenv from "dotenv"

dotenv.config()

const app = express();

const port = process.env.PORT || 3000;

const version = routesVersioning();

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use('/equipo',version(
    {
        "1.0.0" : routas_eqioposv1
    }
));

app.use('/',version(
    {
        "1.0.0" : auth_v1
    }
));

app.listen(port ,async () => {
    console.log(`Server running on port localhost:${port}`)
});