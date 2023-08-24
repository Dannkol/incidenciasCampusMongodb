use("incidensias");

db.insidencia_nivel.insertMany([
  { id: 1, nombre: "level" },
  { id: 2, nombre: "moderada" },
  { id: 3, nombre: "critica" },
]);

db.insidencia_categoria.insertMany([
  {
    id: 1,
    nombre: "software",
    description:
      "todas las insidencias relacionadas con software en la maquina",
  },
  {
    id: 2,
    nombre: "hardware",
    description:
      "todas las insidencias relacionadas con hardware en la maquina",
  },
]);

use("incidensias");

db.tipodocumento.insertMany([
  { id: 1, nombre: "Cedula de ciudadania", abreviacion: "CC" },
  { id: 2, nombre: "Tarjeta de identidad", abreviacion: "TI" },
  { id: 3, nombre: "Pasaporte", abreviacion: "PS" },
  { id: 4, nombre: "Cedula de Extrangeria", abreviacion: "CE" },
]);

use("incidensias");

db.lugares.insertMany([
  { id: 1, nombre: "apolo", description: "Salon de clase" },
  { id: 2, nombre: "artemis", description: "Salon de clase" },
  { id: 3, nombre: "sputnik", description: "Salon de clase" },
  {
    id: 4,
    nombre: "skylab",
    description: "Salon de clasa para aprendizaje autonomo",
  },
  {
    id: 5,
    nombre: "corvus",
    description: "Salon de clasa para aprendizaje autonomo",
  },
  {
    id: 6,
    nombre: "endor",
    description: "Salon de clasa para aprendizaje autonomo",
  },
]);
db.areas.insertMany([
  {
    id: 1,
    nombre: "training",
    description:
      "Salones de clases, son el area donde los trainer pueden dar clases",
  },
  {
    id: 2,
    nombre: "review_1",
    description: "Salones para el aprendiza autonomo",
  },
  {
    id: 3,
    nombre: "review_2",
    description: "Salones para el aprendiza autonomo",
  },
]);
db.lugares_areas.insertMany([
  { id: 1, lugar_id: 1, area_id: 1 },
  { id: 2, lugar_id: 2, area_id: 1 },
  { id: 3, lugar_id: 3, area_id: 1 },
  { id: 4, lugar_id: 4, area_id: 1 },
  { id: 5, lugar_id: 5, area_id: 2 },
  { id: 6, lugar_id: 6, area_id: 3 },
]);

use("incidensias")


db.accesorio_mouse.insertMany([
  { id: 1, marca: "Logitech", description: "Mouse Logitech", serial: "123456" },
  {
    id: 2,
    marca: "Logitech",
    description: "Mouse Logitech",
    serial: "123asdw",
  },
  { id: 3, marca: "Acer", description: "Mouse Acer", serial: "123cw23" },
  { id: 4, marca: "Compumax", description: "Mouse Compumax", serial: "12we56" },
]);

use("incidensias")

db.accesorio_teclado.insertMany([
  {
    id: 1,
    marca: "Logitech",
    description: "Teclado Logitech",
    serial: "124426",
  },
  {
    id: 2,
    marca: "Logitech",
    description: "Teclado Logitech",
    serial: "123as4w",
  },
  { id: 3, marca: "Acer", description: "Teclado Acer", serial: "123cqww3" },
  {
    id: 4,
    marca: "Compumax",
    description: "Teclado Compumax",
    serial: "eq2123",
  },
]);

use("incidensias")

db.accesorio_diademas.insertMany([
  {
    id: 1,
    marca: "Logitech",
    description: "Diademas Logitech"
  },
  {
    id: 2,
    marca: "Logitech",
    description: "Diademas Logitech",
    serial: "123as4w",
  },
  { id: 3, marca: "Acer", description: "Diademas Acer" },
  {
    id: 4,
    marca: "Compumax",
    description: "Diademas Compumax"
  },
]);


use("incidensias")

db.equipos.insertMany([
  {
    id: 1,
    nombre: "CP-123",
    description: "Equipo en perfecto estado",
    lugar_id: 1,
  },
  {
    id: 2,
    nombre: "CP-155",
    description: "Equipo en perfecto estado",
    lugar_id: 1,
  },
  {
    id: 3,
    nombre: "CP-154",
    description: "Equipo en perfecto estado",
    lugar_id: 2,
  },
  {
    id: 4,
    nombre: "CP-156",
    description: "Equipo en perfecto estado",
    lugar_id: 2,
  },
]);

use("incidensias");

db.equipos_acc_lugar.insertMany([
  {
    id: 1,
    equipos_id: 1,
    accesorios_mouse_id: 1,
    accesorios_teclado_id: 1,
    accesorios_diademas_id: 1,
  },
  {
    id: 2,
    equipos_id: 2,
    accesorios_mouse_id: 2,
    accesorios_teclado_id: 2,
    accesorios_diademas_id: 2,
  },
  {
    id: 3,
    equipos_id: 3,
    accesorios_mouse_id: 3,
    accesorios_teclado_id: 3,
    accesorios_diademas_id: 3,
  },
  {
    id: 4,
    equipos_id: 4,
    accesorios_mouse_id: 4,
    accesorios_teclado_id: 4,
    accesorios_diademas_id: 4,
  },
]);

db.infoempresarial.insertMany([
  {
    id: 1,
    emailCoor: "jholver@campuslands.com",
    telFijoCoor: "6785868",
    telMovCoor: "+579317458962",
  },
]);

db.usuarios.insertMany([
  {
    id: 1,
    nombre: "jholver",
    apellidos: "rodriguez",
    password: "12345",
    doc_usuario: 12324,
    tipoDocumento_id: 1,
    infoEmpresarial_id: 1,
    telefono: "+1658742",
    movile: "+5734158924",
    email: "devjgi@gmail.com",
  },
]);

db.usuarios_lugares.insertMany([{ id: 1, lugares_id: 1, usuarios_id: 1 }]);

db.insidencias.insertMany([
  {
    id: 1,
    nombre: "No enciende",
    descripcion:
      "El camper daniel comento que el pc no encencia, una primera comprovacion muesta que es verdad",
    equipo_id: 1,
    lugar_id: 1,
    fecha: new Date("2023-07-15"),
    nivel_id: 3,
    categoria_id: 2,
  },
]);

db.historial_insidencia_usuarios.insertMany([
  { id: 1, usuario_id: 1, insidencia_id: 1 },
]);
