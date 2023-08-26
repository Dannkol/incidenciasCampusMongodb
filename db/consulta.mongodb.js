use("incidensias");

// Consulta de insidencias:

db.insidencias.aggregate([
  {
    $lookup: {
      from: "insidencia_categoria",
      localField: "categoria_id",
      foreignField: "id",
      as: "categoria",
    },
  },
  {
    $lookup: {
      from: "insidencia_nivel",
      localField: "nivel_id",
      foreignField: "id",
      as: "nivel",
    },
  },
  {
    $lookup: {
      from: "lugares",
      localField: "lugar_id",
      foreignField: "id",
      as: "lugar",
    },
  },
  {
    $lookup: {
      from: "equipos",
      localField: "equipo_id",
      foreignField: "id",
      as: "equipo",
    },
  },
  {
    $unwind: "$categoria",
  },
  {
    $unwind: "$nivel",
  },
  {
    $unwind: "$lugar",
  },
  {
    $unwind: "$equipo",
  },
  {
    $project: {
      nombre: 1,
      descripcion: 1,
      equipo: "$equipo.nombre",
      categoria: "$categoria.nombre",
      nivel: "$nivel.nombre",
      lugar: "$lugar.nombre",
    },
  },
]);

use("incidensias");

// Consulta de insidencias por nivel (por ejemplo, 'critica'):

db.insidencias.aggregate([
  {
    $lookup: {
      from: "insidencia_categoria",
      localField: "categoria_id",
      foreignField: "id",
      as: "categoria",
    },
  },
  {
    $lookup: {
      from: "insidencia_nivel",
      localField: "nivel_id",
      foreignField: "id",
      as: "nivel",
    },
  },
  {
    $lookup: {
      from: "lugares",
      localField: "lugar_id",
      foreignField: "id",
      as: "lugar",
    },
  },
  {
    $lookup: {
      from: "equipos",
      localField: "equipo_id",
      foreignField: "id",
      as: "equipo",
    },
  },
  {
    $unwind: "$categoria",
  },
  {
    $unwind: "$nivel",
  },
  {
    $unwind: "$lugar",
  },
  {
    $unwind: "$equipo",
  },
  {
    $match: { "nivel.nombre": "critica" },
  },
  {
    $project: {
      nombre: 1,
      descripcion: 1,
      equipo: "$equipo.nombre",
      categoria: "$categoria.nombre",
      nivel: "$nivel.nombre",
      lugar: "$lugar.nombre",
    },
  },
]);

use("incidensias");

// Consulta de insidencias por lugar (por ejemplo, 'apolo'):
db.insidencias.aggregate([
  {
    $lookup: {
      from: "insidencia_categoria",
      localField: "categoria_id",
      foreignField: "id",
      as: "categoria",
    },
  },
  {
    $lookup: {
      from: "insidencia_nivel",
      localField: "nivel_id",
      foreignField: "id",
      as: "nivel",
    },
  },
  {
    $lookup: {
      from: "lugares",
      localField: "lugar_id",
      foreignField: "id",
      as: "lugar",
    },
  },
  {
    $lookup: {
      from: "equipos",
      localField: "equipo_id",
      foreignField: "id",
      as: "equipo",
    },
  },
  {
    $unwind: "$categoria",
  },
  {
    $unwind: "$nivel",
  },
  {
    $unwind: "$lugar",
  },
  {
    $unwind: "$equipo",
  },
  {
    $match: { "lugar.nombre": "apolo" },
  },
  {
    $project: {
      nombre: 1,
      descripcion: 1,
      equipo: "$equipo.nombre",
      categoria: "$categoria.nombre",
      nivel: "$nivel.nombre",
      lugar: "$lugar.nombre",
    },
  },
]);

use("incidensias");

//Consulta de insidencias y usuarios:

db.historial_insidencia_usuarios.aggregate([
  {
    $lookup: {
      from: "insidencias",
      localField: "insidencia_id",
      foreignField: "id",
      as: "insidencia",
    },
  },
  {
    $lookup: {
      from: "usuarios",
      localField: "usuario_id",
      foreignField: "id",
      as: "usuario",
    },
  },
  {
    $unwind: "$insidencia",
  },
  {
    $unwind: "$usuario",
  },
  {
    $lookup: {
      from: "insidencia_categoria",
      localField: "insidencia.categoria_id",
      foreignField: "id",
      as: "categoria",
    },
  },
  {
    $lookup: {
      from: "insidencia_nivel",
      localField: "insidencia.nivel_id",
      foreignField: "id",
      as: "nivel",
    },
  },
  {
    $lookup: {
      from: "lugares",
      localField: "insidencia.lugar_id",
      foreignField: "id",
      as: "lugar",
    },
  },
  {
    $lookup: {
      from: "equipos",
      localField: "insidencia.equipo_id",
      foreignField: "id",
      as: "equipo",
    },
  },
  {
    $unwind: "$categoria",
  },
  {
    $unwind: "$nivel",
  },
  {
    $unwind: "$lugar",
  },
  {
    $unwind: "$equipo",
  },
  {
    $project: {
      trainer: "$usuario.nombre",
      nombre: "$insidencia.nombre",
      descripcion: "$insidencia.descripcion",
      equipo: "$equipo.nombre",
      categoria: "$categoria.nombre",
      nivel: "$nivel.nombre",
      lugar: "$lugar.nombre",
    },
  },
]);

use("incidensias");

// Consulta de insidencias y usuarios por nivel (por ejemplo, 'critica'):

db.historial_insidencia_usuarios.aggregate([
  {
    $lookup: {
      from: "insidencias",
      localField: "insidencia_id",
      foreignField: "id",
      as: "insidencia",
    },
  },
  {
    $lookup: {
      from: "usuarios",
      localField: "usuario_id",
      foreignField: "id",
      as: "usuario",
    },
  },
  {
    $unwind: "$insidencia",
  },
  {
    $unwind: "$usuario",
  },
  {
    $lookup: {
      from: "lugares",
      localField: "insidencia.lugar_id",
      foreignField: "id",
      as: "lugar",
    },
  },
  {
    $lookup: {
      from: "equipos",
      localField: "insidencia.equipo_id",
      foreignField: "id",
      as: "equipo",
    },
  },
  {
    $unwind: "$lugar",
  },
  {
    $unwind: "$equipo",
  },
  {
    $match: { "insidencia.nivel": 8 },
  },
  {
    $project: {
      trainer: "$usuario.nombre",
      nombre: "$insidencia.nombre",
      descripcion: "$insidencia.descripcion",
      equipo: "$equipo.nombre",
      categoria: "$insidencia.categoria",
      nivel: "$insidencia.nivel",
      lugar: "$lugar.nombre",
    },
  },
]);

use("incidensias");

// Consulta de insidencias y usuarios por lugar (por ejemplo, 'apolo'):

db.historial_insidencia_usuarios.aggregate([
  {
    $lookup: {
      from: "insidencias",
      localField: "insidencia_id",
      foreignField: "id",
      as: "insidencia",
    },
  },
  {
    $lookup: {
      from: "usuarios",
      localField: "usuario_id",
      foreignField: "id",
      as: "usuario",
    },
  },
  {
    $unwind: "$insidencia",
  },
  {
    $unwind: "$usuario",
  },
  {
    $lookup: {
      from: "insidencia_categoria",
      localField: "insidencia.categoria_id",
      foreignField: "id",
      as: "categoria",
    },
  },
  {
    $lookup: {
      from: "insidencia_nivel",
      localField: "insidencia.nivel_id",
      foreignField: "id",
      as: "nivel",
    },
  },
  {
    $lookup: {
      from: "lugares",
      localField: "insidencia.lugar_id",
      foreignField: "id",
      as: "lugar",
    },
  },
  {
    $lookup: {
      from: "equipos",
      localField: "insidencia.equipo_id",
      foreignField: "id",
      as: "equipo",
    },
  },
  {
    $unwind: "$categoria",
  },
  {
    $unwind: "$nivel",
  },
  {
    $unwind: "$lugar",
  },
  {
    $unwind: "$equipo",
  },
  {
    $match: { "lugar.nombre": "apolo" },
  },
  {
    $project: {
      trainer: "$usuario.nombre",
      nombre: "$insidencia.nombre",
      descripcion: "$insidencia.descripcion",
      equipo: "$equipo.nombre",
      categoria: "$categoria.nombre",
      nivel: "$nivel.nombre",
      lugar: "$lugar.nombre",
    },
  },
]);

use("incidensias");

// Consulta de insidencias y usuarios por equipo (por ejemplo, 'CP-123'):

db.historial_insidencia_usuarios.aggregate([
  {
    $lookup: {
      from: "insidencias",
      localField: "insidencia_id",
      foreignField: "id",
      as: "insidencia",
    },
  },
  {
    $lookup: {
      from: "usuarios",
      localField: "usuario_id",
      foreignField: "id",
      as: "usuario",
    },
  },
  {
    $unwind: "$insidencia",
  },
  {
    $unwind: "$usuario",
  },
  {
    $lookup: {
      from: "insidencia_categoria",
      localField: "insidencia.categoria_id",
      foreignField: "id",
      as: "categoria",
    },
  },
  {
    $lookup: {
      from: "insidencia_nivel",
      localField: "insidencia.nivel_id",
      foreignField: "id",
      as: "nivel",
    },
  },
  {
    $lookup: {
      from: "lugares",
      localField: "insidencia.lugar_id",
      foreignField: "id",
      as: "lugar",
    },
  },
  {
    $lookup: {
      from: "equipos",
      localField: "insidencia.equipo_id",
      foreignField: "id",
      as: "equipo",
    },
  },
  {
    $unwind: "$categoria",
  },
  {
    $unwind: "$nivel",
  },
  {
    $unwind: "$lugar",
  },
  {
    $unwind: "$equipo",
  },
  {
    $match: { "equipo.nombre": "CP-123" },
  },
  {
    $project: {
      trainer: "$usuario.nombre",
      nombre: "$insidencia.nombre",
      descripcion: "$insidencia.descripcion",
      equipo: "$equipo.nombre",
      categoria: "$categoria.nombre",
      nivel: "$nivel.nombre",
      lugar: "$lugar.nombre",
    },
  },
]);



// Luego, crea el usuario
db.usuarios.insertOne({
  id: 1,
  nombre: "jholver",
  apellidos: "rodriguez",
  password: "12345",
  doc_usuario: 12324,
  telefono: "+1658742",
  movile: "+5734158924",
  email: "devjgi@gmail.com",
});

// Crear un nuevo equipo

// Accesorio Mouse
db.accesorio_mouse.insertOne({
  _id: 1,
  marca: "Logitech",
  descripcion: "Mouse Logitech",
  serial: "123456",
});

// Accesorio Teclado
db.accesorio_teclado.insertOne({
  _id: 1,
  marca: "Logitech",
  descripcion: "Teclado Logitech",
  serial: "124426",
});

// Accesorio Diademas
db.accesorio_diademas.insertOne({
  _id: 1,
  marca: "Logitech",
  descripcion: "Diademas Logitech",
  serial: "124426",
});

db.equipos.insertOne({
  _id: 1,
  nombre: "CP-123",
  descripcion: "Equipo en perfecto estado",
  lugar_id: 1,
});

db.equipos_acc_lugar.insertOne({
  equipos_id: 1,
  accesorios_mouse_id: 1,
  accesorios_teclado_id: 1,
  accesorios_diademas_id: 1,
});

use("incidensias");

// Consulta de equipos:

db.equipos_acc_lugar.aggregate([
  {
    $lookup: {
      from: "equipos",
      localField: "equipos_id",
      foreignField: "id",
      as: "equipo",
    },
  },
  {
    $lookup: {
      from: "lugares",
      localField: "equipo.lugar_id",
      foreignField: "id",
      as: "lugar",
    },
  },
  {
    $unwind: "$equipo",
  },
  {
    $unwind: "$lugar",
  },
  {
    $project: {
      _id: 0,
      id: "$id",
      equipo: "$equipo.nombre",
      descripcion_eq: "$equipo.descripcion",
      lugar: "$lugar.nombre",
      desc_lugar: "$lugar.descripcion",
    },
  },
]);

use("incidensias");

// Consulta de equipos por lugar (por ejemplo, 'apolo'):

db.equipos_acc_lugar.aggregate([
  {
    $lookup: {
      from: "equipos",
      localField: "equipos_id",
      foreignField: "id",
      as: "equipo",
    },
  },
  {
    $lookup: {
      from: "lugares",
      localField: "equipo.lugar_id",
      foreignField: "id",
      as: "lugar",
    },
  },
  {
    $unwind: "$equipo",
  },
  {
    $unwind: "$lugar",
  },
  {
    $match: { "lugar.nombre": "apolo" },
  },
  {
    $project: {
      _id: 0,
      id: "$id",
      equipo: "$equipo.nombre",
      descripcion_eq: "$equipo.descripcion",
      lugar: "$lugar.nombre",
      desc_lugar: "$lugar.descripcion",
    },
  },
]);

use("incidensias");

// Consulta de equipos por marca de accesorios (por ejemplo, 'Logitech'):

db.equipos_acc_lugar.aggregate([
  {
    $lookup: {
      from: "equipos",
      localField: "equipos_id",
      foreignField: "id",
      as: "equipo",
    },
  },
  {
    $lookup: {
      from: "lugares",
      localField: "equipo.lugar_id",
      foreignField: "id",
      as: "lugar",
    },
  },
  {
    $lookup: {
      from: "accesorio_diademas",
      localField: "accesorios_diademas_id",
      foreignField: "id",
      as: "accesorio_diademas",
    },
  },
  {
    $lookup: {
      from: "accesorio_mouse",
      localField: "accesorios_mouse_id",
      foreignField: "id",
      as: "accesorio_mouse",
    },
  },
  {
    $lookup: {
      from: "accesorio_teclado",
      localField: "accesorios_teclado_id",
      foreignField: "id",
      as: "accesorio_teclado",
    },
  },
  {
    $unwind: "$equipo",
  },
  {
    $unwind: "$lugar",
  },
  {
    $unwind: "$accesorio_diademas",
  },
  {
    $unwind: "$accesorio_mouse",
  },
  {
    $unwind: "$accesorio_teclado",
  },
  {
    $match: {
      $or: [
        { "accesorio_diademas.marca": "Logitech" },
        { "accesorio_mouse.marca": "Logitech" },
        { "accesorio_teclado.marca": "Logitech" },
      ],
    },
  },
  {
    $project: {
      _id: 0,
      id: "$id",
      equipo: "$equipo.nombre",
      marca_diadema: "$accesorio_diademas.marca",
      marca_mouse: "$accesorio_mouse.marca",
      marca_teclado: "$accesorio_teclado.marca",
      descripcion_eq: "$equipo.descripcion",
      lugar: "$lugar.nombre",
      desc_lugar: "$lugar.descripcion",
    },
  },
]);
