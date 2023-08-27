use("incidensias");

db.createCollection("usuarios", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "usuarios",
      properties: {
        id: {anyOf: [
          { bsonType: "objectId", description: "id is required" },
          { bsonType: "int", description: "id is required" },
        ], },
        nombre: {
          bsonType: "string",
          maxLength: 150,
          description: "nombre of the user",
        },
        apellidos: {
          bsonType: "string",
          maxLength: 150,
          description: " acellidos of the user",
        },
        password: {
          bsonType: "string",
          maxLength: 150,
          description: "password of the user",
        },
        doc_usuario: {
          bsonType: "number",
          description: "id of the docusuario",
        },
        rol : {
          bsonType : "number",
          description : "rol del usuario",
          minimum: 1,
          maximum: 2,
        }
      },
      required: [
        "id",
        "nombre",
        "apellidos",
        "password",
        "doc_usuario",
        "rol"
      ],
    },
  },
});

use("incidensias");

db.createCollection("lugares", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "Lugares",
      required: ["id", "nombre", "description"],
      properties: {
        id: {  anyOf: [
          { bsonType: "objectId", description: "id is required" },
          { bsonType: "int", description: "id is required" },
        ], },
        nombre: {
          bsonType: "string",
          maxLength: 150,
          description: "nombre is requiered",
        },
        description: {
          bsonType: "string",
          maxLength: 255,
          description: "description is requiered",
        },
      },
    },
  },
});

use("incidensias");

db.createCollection("areas", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "areas",
      required: ["id", "nombre", "description"],
      properties: {
        id: { anyOf: [
          { bsonType: "objectId", description: "id is required" },
          { bsonType: "int", description: "id is required" },
        ], },
        nombre: {
          bsonType: "string",
          maxLength: 150,
          description: "nombre is required",
        },
        description: {
          bsonType: "string",
          maxLength: 255,
          description: "description is required",
        },
      },
    },
  },
});

db.createCollection("lugares_areas", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "lugares_areas",
      required: ["lugar_id", "area_id"],
      properties: {
        lugar_id: {          anyOf: [
          { bsonType: "objectId", description: "area_id is required" },
          { bsonType: "int", description: "usuarios_id is required" },
        ], },
        area_id: {          anyOf: [
          { bsonType: "objectId", description: "area_id is required" },
          { bsonType: "int", description: "area_id is required" },
        ], },
      },
    },
  },
});

db.createCollection("usuarios_lugares", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "usuarios_lugares",
      required: ["lugares_id", "usuarios_id"],
      properties: {
        lugares_id: {
          anyOf: [
            { bsonType: "objectId", description: "lugar_id is required" },
            { bsonType: "int", description: "lugar_id is required" },
          ],
        },
        usuarios_id: {
          anyOf: [
            { bsonType: "objectId", description: "usuarios_id is required" },
            { bsonType: "int", description: "usuarios_id is required" },
          ],
        },
      },
    },
  },
});

use("incidensias");

db.createCollection("equipos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "equipos",
      required: ["id", "nombre", "description", "lugar_id"],
      properties: {
        id: {
          anyOf: [
            { bsonType: "objectId", description: "id is required" },
            { bsonType: "int", description: "id is required" },
          ],
        },
        nombre: {
          bsonType: "string",
          maxLength: 150,
          description: "nombre is required",
        },
        description: {
          bsonType: "string",
          maxLength: 255,
          description: "description is required",
        },
        lugar_id: {
          anyOf: [
            { bsonType: "objectId", description: "lugar_id is required" },
            { bsonType: "int", description: "lugar_id is required" },
          ],
        },
      },
    },
  },
});

db.createCollection("accesorio_teclado", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "accesorio_teclado",
      required: ["id", "marca", "description"],
      properties: {
        id: {
          anyOf: [
            { bsonType: "objectId", description: "id is required" },
            { bsonType: "int", description: "id is required" },
          ],
        },
        marca: {
          bsonType: "string",
          maxLength: 150,
          description: "marca is required",
        },
        description: {
          bsonType: "string",
          maxLength: 255,
          description: "description is required",
        },
      },
    },
  },
});

db.createCollection("accesorio_mouse", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "accesorio_mouse",
      required: ["id", "marca", "description"],
      properties: {
        id: {
          anyOf: [
            { bsonType: "objectId", description: "id is required" },
            { bsonType: "int", description: "id is required" },
          ],
        },
        marca: {
          bsonType: "string",
          maxLength: 150,
          description: "marca is required",
        },
        description: {
          bsonType: "string",
          maxLength: 255,
          description: "description is required",
        },
      },
    },
  },
});

use("incidensias");

db.createCollection("accesorio_diademas", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "accesorio_diademas",
      required: ["id", "marca", "description"],
      properties: {
        id: {
          anyOf: [
            { bsonType: "objectId", description: "id is required" },
            { bsonType: "int", description: "id is required" },
          ],
        },
        marca: {
          bsonType: "string",
          maxLength: 150,
          description: "marca is required",
        },
        description: {
          bsonType: "string",
          maxLength: 255,
          description: "description is required",
        },
      },
    },
  },
});

db.createCollection("equipos_acc_lugar", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "equipos_acc_lugar",
      required: [
        "equipos_id",
        "accesorios_mouse_id",
        "accesorios_teclado_id",
        "accesorios_diademas_id",
      ],
      properties: {
        equipos_id: {
          anyOf: [
            { bsonType: "objectId", description: "equipos_id is required" },
            { bsonType: "int", description: "equipos_id is required" },
          ],
        },
        accesorios_mouse_id: {
          anyOf: [
            {
              bsonType: "objectId",
              description: "accesorios_mouse_id is required",
            },
            { bsonType: "int", description: "accesorios_mouse_id is required" },
          ],
        },
        accesorios_teclado_id: {
          anyOf: [
            {
              bsonType: "objectId",
              description: "accesorios_teclado_id is required",
            },
            {
              bsonType: "int",
              description: "accesorios_teclado_id is required",
            },
          ],
        },
        accesorios_diademas_id: {
          anyOf: [
            {
              bsonType: "objectId",
              description: "accesorios_diademas_id is required",
            },
            {
              bsonType: "int",
              description: "accesorios_diademas_id is required",
            },
          ],
        },
      },
    },
  },
});

use("incidensias");

db.createCollection("insidencias", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "insidencias",
      required: [
        "id",
        "nombre",
        "descripcion",
        "equipo_id",
        "lugar_id",
        "fecha",
        "nivel",
        "categoria",
      ],
      properties: {
        id: {
          anyOf: [
            { bsonType: "objectId", description: "id is required" },
            { bsonType: "int", description: "id is required" },
          ],
        },
        nombre: {
          bsonType: "string",
          maxLength: 150,
          description: "nombre is required",
        },
        descripcion: {
          bsonType: "string",
          maxLength: 255,
          description: "descripcion is required",
        },
        equipo_id: {
          anyOf: [
            { bsonType: "objectId", description: "equipo_id is required" },
            { bsonType: "int", description: "equipo_id is required" },
          ],
        },
        lugar_id: {
          anyOf: [
            { bsonType: "objectId", description: "lugar_id is required" },
            { bsonType: "int", description: "lugar_id is required" },
          ],
        },
        user_id: {
          anyOf: [
            { bsonType: "objectId", description: "user_id is required" },
            { bsonType: "int", description: "user_id is required" },
          ],
        },
        fecha: { bsonType: "date", description: "fecha is required" },
        nivel: {
          bsonType: "int",
          description: "Nivel válido",
          minimum: 1,
          maximum: 10,
        },
        categoria: {
          bsonType: "string",
          description: "Categoría válida",
          enum: ["software", "hardware", "red"],
        },
      },
    },
  },
});

use("incidensias");

db.createCollection("historial_insidencia_usuarios", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "Historial_insidencia_usuarios",
      required: ["usuario_id", "insidencia_id"],
      properties: {
        usuario_id: {
          anyOf: [
            { bsonType: "objectId", description: "usuario_id is required" },
            { bsonType: "int", description: "usuario_id is required" },
          ],
        },
        insidencia_id: {
          anyOf: [
            { bsonType: "objectId", description: "insidencia_id is required" },
            { bsonType: "int", description: "insidencia_id is required" },
          ],
        },
      },
    },
  },
});

use("incidensias");

db.createCollection("versiones", {
  validator : {
    $jsonSchema : {
      bsonType : "object",
      title : "versiones",
      required : ["versiones", "id_usuario"],
      properties : {
        versiones : {
          bsonType : "string",
          description : "versiones permitidas"
        },
        id_usuario : {
          anyOf: [
            { bsonType: "objectId", description: "id_usuario is required" },
            { bsonType: "int", description: "id_usuario is required" },
          ]
        }
      }
    }
  }
})