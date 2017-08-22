define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "E__interviwer_Interviewer_QAauto_APIdoc_doc_main_js",
    "groupTitle": "E__interviwer_Interviewer_QAauto_APIdoc_doc_main_js",
    "name": ""
  },
  {
    "type": "delete",
    "url": "api/v1/projects/:id",
    "title": "Delete project",
    "name": "DeleteProjects",
    "group": "Projects",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-key",
            "description": "<p>Users unique access-key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json; charset=utf-8</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The Projects-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Projects.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Projects.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Mandatory with data of creating(By default).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Mandatory with data of update(By default).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\t\"status\": \"SUCCESS\",\n \t\"message\": \"Project deleted\",\n    \t\"data\": {\n         \t\"id\": 30,\n         \t\"title\": \"TestEdit\",\n         \t\"description\": \"testUpdate\",\n         \t\"created_at\": \"2017-08-22T11:32:34.824Z\",\n         \t\"updated_at\": \"2017-08-22T11:52:25.651Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Returned if the user is not logged in.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProjectNotFound",
            "description": "<p>Returned if the project does not exist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./j.java",
    "groupTitle": "Projects"
  },
  {
    "type": "get",
    "url": "api/v1/projects/:id",
    "title": "Get all projects",
    "name": "GetProjects",
    "group": "Projects",
    "description": "<p>Returns all projects which are visible for the currently logged in user.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-key",
            "description": "<p>Users unique access-key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json; charset=utf-8</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n  {\n \t\"status\": \"SUCCESS\",\n \t\"message\": \"Project id=30 loaded\",\n \t\"data\":  {\n         \t \"id\": 30,\n           \t \"title\": \"Test\",\n            \t \"description\": \"test\",\n            \t \"created_at\": \"2017-08-22T11:32:34.824Z\",\n            \t \"updated_at\": \"2017-08-22T11:32:34.824Z\"\n        }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Projects.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Projects.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Mandatory with data of creating(By default).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Mandatory with data of update(By default).</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProjectNotFound",
            "description": "<p>The <code>id</code> of the Project was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Returned if the user is not logged in.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./j.java",
    "groupTitle": "Projects"
  },
  {
    "type": "patch",
    "url": "api/v1/projects/:id",
    "title": "Edit project",
    "name": "PatchProjects",
    "group": "Projects",
    "description": "<p>Replace parts of existing project.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-key",
            "description": "<p>Users unique access-key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json; charset=utf-8</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>Optional title of the Projects.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Optional description of the Projects.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\"title\": \"TestEdit\", \n    \"description\": \"testUpdate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Projects.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Projects.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Mandatory with data of creating(By default).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Mandatory with data of update(By default).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\t\"status\": \"SUCCESS\",\n\t\"message\": \"Update project\",\n    \t\"data\": {\n         \t\"id\": 30,\n         \t\"title\": \"TestEdit\",\n         \t\"description\": \"testUpdate\",\n         \t\"created_at\": \"2017-08-22T11:32:34.824Z\",\n         \t\"updated_at\": \"2017-08-22T11:52:25.651Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Returned if the user is not logged in.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProjectNotFound",
            "description": "<p>Returned if the project does not exist.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./j.java",
    "groupTitle": "Projects"
  },
  {
    "type": "post",
    "url": "api/v1/projects/",
    "title": "Create project",
    "name": "PostProjects",
    "group": "Projects",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-key",
            "description": "<p>Users unique access-key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json; charset=utf-8</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>Optional title of the Projects.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Optional description of the Projects.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\"title\": \"Test\",\n\n    \"description\": \"test\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The new Projects-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Projects.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Projects.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Mandatory with data of creating(By default).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Mandatory with data of update(By default).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \t\"status\": \"SUCCESS\",\n  \t\"message\": \"Saved project\",\n  \t\"data\": {\n        \t\"id\": 30,\n       \t\t\"title\": \"Test\",\n       \t\t\"description\": \"test\",\n       \t\t\"created_at\": \"2017-08-22T11:32:34.824Z\",\n       \t\t\"updated_at\": \"2017-08-22T11:32:34.824Z\"\n       }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProjectNotFound",
            "description": "<p>The <code>id</code> of the Project was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Returned if the user is not logged in.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./j.java",
    "groupTitle": "Projects"
  },
  {
    "type": "put",
    "url": "api/v1/projects/:id",
    "title": "Update project",
    "name": "PutProjects",
    "group": "Projects",
    "description": "<p>Replace the entire project with the new representation provided.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-key",
            "description": "<p>Users unique access-key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "content-type",
            "description": "<p>application/json; charset=utf-8</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>Optional title of the Projects.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Optional description of the Projects.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\"title\": \"TestUpdate\",\n\n    \"description\": \"testUpdate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Projects.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Projects.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>Mandatory with data of creating(By default).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Mandatory with data of update(By default).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\t\"status\": \"SUCCESS\",\n\t\"message\": \"Update project\",\n \t\"data\": {\n   \t\t\"id\": 30,\n       \t \t\"title\": \"TestUpdate\",\n        \t\"description\": \"testUpdate\",\n        \t\"created_at\": \"2017-08-22T11:32:34.824Z\",\n        \t\"updated_at\": \"2017-08-22T11:44:33.906Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProjectNotFound",
            "description": "<p>Returned if the project does not exist.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Returned if the user is not logged in.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./j.java",
    "groupTitle": "Projects"
  }
] });
