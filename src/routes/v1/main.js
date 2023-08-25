import espress from 'espress';

const rutas = espress().Router();

rutas.get('/', (req, res) => {
  res.send('Hello World!');
});

export default rutas;