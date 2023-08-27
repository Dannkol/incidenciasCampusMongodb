import jwt from "jsonwebtoken";

import { validationResult } from "express-validator";


import { findUser } from "../module/user.js";
import jwtconfig from "../config/jwtconfig.js";

const authorization = async (req, res) => {
  const secretKey = jwtconfig.secret_key;

  try {
    const result = validationResult(req);
    if (result.isEmpty()) {
      const user = await findUser(req.body);

      const auth =
        user.email === req.body.email && user.password == req.body.password;
      if (!auth) {
        return res.status(401).json({ error: "Credenciales inválidas" });
      } else {
        // Generar el token JWT
        const token = jwt.sign(
          { id: user.id, nombre: user.nombre, rol: user.rol , email: user.email},
          secretKey,
          {
            expiresIn: "1h",
          }
        );

        // Responder con el token
        res.json({ token });
      }
    } else {
        res.send({ errors: result.array() });
    }
  } catch (error) {
    console.error(error);
  }
};

export { authorization };
