import express from 'express';

const rutas = express().Router();

rutas.get('/', (req, res) => {
  res.send('Hello World!');
});

export default rutas;