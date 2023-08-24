use("incidensias");

db.createCollection("tipodocumento", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "Tipo Documento",
      required: ["id", "nombre", "abreviacion"],
      properties: {
        id: {
          bsonType: "number",
          description: "Id of tipo document",
        },
        nombre: {
          bsonType: "string",
          maxLength: 150,
          description: "Nombre de tipo document",
        },
        abreviacion: {
          bsonType: "string",
          maxLength: 50,
          description: "abreviacion de tipo document",
        },
      },
    },
  },
});

use("incidensias");

db.createCollection("infoEmpresarial", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "Info Empresarial",
      properties: {
        id: {
          bsonType: "number",
          description: "Id del tipo document",
        },
        emailCoor: {
          bsonType: "string",
          maxLength: 150,
          description: "Email del tipo document",
        },
        telFijoCoor: {
          bsonType: "string",
          maxLength: 150,
          description: "Tel de tipo document",
        },
        telMovCoor: {
          bsonType: "string",
          maxLength: 150,
          description: "Tel de tipo document",
        },
      },
      required: ["id", "emailCoor", "telFijoCoor", "telMovCoor"],
    },
  },
});

db.createCollection("usuarios", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "usuarios",
      properties: {
        id: { bsonType: "number", description: "id of the user" },
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
        tipoDocumento_id: {
          bsonType: "number",
          description: "id of the tipo document",
        },
        infoEmpresarial_id: {
          bsonType: "number",
          description: "id of the info",
        },
      },
      required: [
        "id",
        "nombre",
        "apellidos",
        "password",
        "doc_usuario",
        "tipoDocumento_id",
        "infoEmpresarial_id",
      ],
    },
  },
});

use("incidensias")

db.createCollection("lugares", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "Lugares",
      required: ["id", "nombre", "description"],
      properties: {
        id: { bsonType: "number", description: "id is requiered" },
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
        id: { bsonType: "number", description: "id is required" },
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
        lugar_id: { bsonType: "number", description: "lugar_id is required" },
        area_id: { bsonType: "number", description: "area_id is required" },
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
          bsonType: "number",
          description: "lugares_id is required",
        },
        usuarios_id: {
          bsonType: "number",
          description: "usuarios_id is required",
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
        id: { bsonType: "number", description: "id is required" },
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
        lugar_id: { bsonType: "number", description: "lugar_id is required" },
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
        id: { bsonType: "number", description: "id is required" },
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
        id: { bsonType: "number", description: "id is required" },
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
        id: { bsonType: "number", description: "id is required" },
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
          bsonType: "number",
          description: "equipos_id is required",
        },
        accesorios_mouse_id: {
          bsonType: "int",
          description: "accesorios_mouse_id is required",
        },
        accesorios_teclado_id: {
          bsonType: "number",
          description: "accesorios_teclado_id is required",
        },
        accesorios_diademas_id: {
          bsonType: "number",
          description: "accesorios_diademas_id is required",
        },
      },
    },
  },
});

use("incidensias");

db.createCollection("insidencia_categoria", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "insidencia_categoria",
      required: ["id", "nombre", "descripcion"],
      properties: {
        id: { bsonType: "number", description: "id is required" },
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
      },
    },
  },
});

db.createCollection("insidencia_nivel", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "insidencia_nivel",
      required: ["id", "nombre"],
      properties: {
        id: { bsonType: "number", description: "id is required" },
        nombre: {
          bsonType: "string",
          maxLength: 150,
          description: "nombre is required",
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
        "nivel_id",
        "categoria_id",
      ],
      properties: {
        id: { bsonType: "number", description: "id is required" },
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
        equipo_id: { bsonType: "number", description: "equipo_id is required" },
        lugar_id: { bsonType: "number", description: "lugar_id is required" },
        fecha: { bsonType: "date", description: "fecha is required" },
        nivel_id: { bsonType: "number", description: "nivel_id is required" },
        categoria_id: {
          bsonType: "number",
          description: "categoria_id is required",
        },
      },
    },
  },
});

db.createCollection("Historial_insidencia_usuarios", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "Historial_insidencia_usuarios",
      required: ["usuario_id", "insidencia_id"],
      properties: {
        usuario_id: { bsonType: "number", description: "usuario_id is required" },
        insidencia_id: {
          bsonType: "number",
          description: "insidencia_id is required",
        },
      },
    },
  },
});
