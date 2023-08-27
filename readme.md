
# Sistema de insidencias campuslands

El centro de apoyo tecnologico de campuslands do ha contratado para construir una aplicación que permita devar la gestion de insidencias tecnicas en cada una de las salas de entrenamiento y review. el dider de it desea que cada trainer pueda reportar das insidencias ocurridas. 

El departamento de it ha clasificado las insidencias en las siguientes categorias: hardware & software, cada trainer desea ingresar la siguiente informacion al momento de reportar la insidencia categora, tipo insidencia, descripción, fecha reporte area de insidencia y lugar de la la insidencia.

Campuslunds cuenta con 4 areas generales en las cuales se encuentran los equipos tecnologicos de uso diario de los campers 4 trainers. las areas son las siguientes: area training (apolo, artemis sputnik y skylab), area review 1 (corvus), area review 2 (endor).

### Puntos a realizar

* Las insidencias se pueden categorizar en leve, moderada y critica. 

* El sistema debe permitir asignar computadores, teclados, mouse y diademas de sonido en cada uno de los salones (lugares). 

* El sistema debe permitir crear trainers (ld, nombre, email personal, email corporative, telefona movil, telefon residencia, telefano empress, telefono mavil empresarial)

# Diagrama MER

![Diagrama](https://github.com/Dannkol/incidenciasCampus/blob/main/doc/diagrama_mer.JPG?raw=true)




## Run Locally

Clona el repositorio

```bash
  git clone https://github.com/Dannkol/incidenciasCampus.git
```

ve al directorio

```bash
  cd incidenciasCampus
```

Instala las dependencias

```bash
  npm install
```

Start server

```bash
  npm run dev
```

## Creacion de la base de datos

``NOTA`` : Recuerda correr las colleccion e inserciones uno por una para evitar conflictos por workflow

* Ejecuta la creacion de las collecciones una por una esta se encuentra en la ruta `db\insisdencias.mongodb.js`
* Ejecuta la insercion de datos, tambien una por uan esta se encuenta en el ruta `db\data.mongodb.js`
* Si desear ver las consultas estas se encuentan en la ruta `db\consulta.mongodb.js`

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://dannkol.github.io/portafolios/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/daniel-manosalva-000b98242)


## API Reference

## Versiones

Para la version 1.0.0 no es necesario usar una autorización bear y cualquier rol puede acceder a esta

#### post authentication

sin importar la version es necesario crear el token

```http
  POST /auth/v1
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `nombre` | `string` | **Required**.  |
| `password` | `string` | **Required**.  | 
| `email` | `string` | **Required**.  | 

respuesta

```js
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWJhZjAzNDljZDM2OWFlZDFjNDc3NCIsIm5vbWJyZSI6ImRhbmllbCIsInJvbCI6MiwiZW1haWwiOiJkYW5pZWxAZ21haWwuY29tIiwiaWF0IjoxNjkzMTY4Mjc3LCJleHAiOjE2OTMxNzE4Nzd9.Qln97dE8L8OVNj_L3x5I7jZ6TTH_vK3jVfr2g9sFYlw"
}
```

Una ves tenemos el token este es necesario par los endpoints que lo requieran


### Version 1.0.0

#### Parametros

* accept-version -> Version
* Authorization -> Token

#### get diademas

```http
  GET /equipo/diademas
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `/` | `/` | **/**.  |

#### post diademas

```http
  POST /equipo/diademas
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. API key   | 
| `marca` | `string` | **Required**.  |
| `description` | `string` | **Required**.  |

#### put diademas

```http
  PUT /equipo/diademas/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. API key   | 
| `:id` | `string` | **Required**.  |

#### delete diademas

```http
  DELETE /equipo/diademas/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. API key   | 
| `:id` | `string` | **Required**.  |

#### get equipo

```http
  GET /equipo/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `/` | `/` | **/**.  |

#### get equipo por marca

```http
  GET /equipo/:marca
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. API key   | 
| `/` | `/` | **/**.  |

#### post equipo 

```http
  POST /equipo/create
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. API key   | 
| `nombre_equipo` | `string` | **Required**.  |
| `descripcion` | `string` | **Required**.  |
| `lugar` | `string` | **Required**.  id del lugar del equipo|
| `accesorios` | `object` | **Required**. object con los id de los accesorios|
| `mouse` | `string` | **Required**. id del mouse del equipo  |
| `diademas` | `string` | **Required**. id del diademas del equipo  |
| `teclado` | `string` | **Required**. id del teclado del equipo  |

request

```json
{
  "nombre_equipo": "deta",
  "descripcion": "beta",
  "lugar": "64e68f4c3abd98e127a3afd0",
  "accesorios": {
    "mouse": "64e69b1e8592bb98d208f7b2",
    "teclado": "64e69b2dd1a7bbcb041ecc87",
    "diademas": "64e69c0be14ca56133811c86"
  }
}
```

### Version 1.0.0

#### Parametros

* accept-version -> Version
* Authorization ->  bearer

#### post insidencias 

usara la bearer API key para saber que usuario esta creando la insidencia y si el rol esta autorizado en este caso solo el rol 2 puedo crear insidencias

```http
  POST /equipo/insidencias
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. bearer API key    | 
| `nombre` | `string` | **Required**.  |
| `descripcion` | `string` | **Required**.  |
| `lugar` | `string` | **Required**.  id del lugar del equipo|
| `equipo_id` | `string` | **Required**. id del equipo|
| `fecha` | `Date` | **Required**. fecha en formato YY-MM-DD |
| `nivel` | `Number` | **Required**. nivel de la insidencia del 1 al 10  |
| `categoria` | `Number` | **Required**. software, hardware y red  |

request

```json

{
  "nombre" : "papas2 fritas",
  "descripcion" : "street2 food",
  "equipo_id" : "64ea6c2355094915142bc95c",
  "lugar_id" : "64ea6c2155094915142bc941",
  "fecha" : "2020-03-13",
  "nivel" : 2,
  "categoria" : "red"
}

```

#### get all insidencias

```http
  GET /equipo/all/insidencias
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. bearer API key   | 
| `/` | `/` | **/**.  |