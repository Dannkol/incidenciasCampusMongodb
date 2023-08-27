import express from "express";

import passport from "passport";
import { Strategy as BearerStrategy } from "passport-http-bearer";

import jwt from "jsonwebtoken";
import jwtconfig from "../../config/jwtconfig.js";

// MIDDLEWARE

import { validar_insidencias } from "../../middleware/validate_insidencias.js";

import {createInsidencias , findInsidencias} from "../../controller/ControllerInsidencias.js";

passport.use(
    new BearerStrategy((token, done) => {
      try {
        const user = jwt.verify(token, jwtconfig.secret_key);
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    })
  );

const rutas_insidencias_v2 = express.Router();

rutas_insidencias_v2.post(
  "/insidencias",
  passport.authenticate("bearer", { session: false }),
  validar_insidencias,
  createInsidencias
);

rutas_insidencias_v2.get(
    "/all/insidencias",
    passport.authenticate("bearer", { session: false }),
    findInsidencias
  );

export default rutas_insidencias_v2;
