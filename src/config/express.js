import express from "express";

import passport from "passport";
import { Strategy as BearerStrategy } from "passport-http-bearer";



const configureApp = (app) => {
  // Configuraciones de Express
  app.use(express.json()); // Para manejar solicitudes JSON
  app.use(express.urlencoded({ extended: true })); // Para manejar solicitudes URL-encoded

  
  
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
