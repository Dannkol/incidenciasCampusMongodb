import express from "express";

import passport from "passport";
import { Strategy as BearerStrategy } from "passport-http-bearer";
import jwt from "jsonwebtoken";
import jwtconfig from "../config/jwtconfig.js";

const configureApp = (app) => {
  // Configuraciones de Express
  app.use(express.json()); // Para manejar solicitudes JSON
  app.use(express.urlencoded({ extended: true })); // Para manejar solicitudes URL-encoded

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

  // Otros middlewares y configuraciones de Express
  app.use(passport.initialize());
  // ...

  // Manejador de errores global
  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send("Error interno del servidor");
  });
};

export default configureApp;
