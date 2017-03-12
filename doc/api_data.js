define({ "api": [
  {
    "type": "post",
    "url": "/get-file-size",
    "title": "",
    "description": "<p>Returns the file size of an uploaded file</p>",
    "name": "get_file_size",
    "group": "FileMetadata",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>The size of the uploaded file in bytes</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"size\":52476\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "FileMetadata"
  },
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
    "group": "_home_ubuntu_workspace_API_File_Metadata_Microservice_doc_main_js",
    "groupTitle": "_home_ubuntu_workspace_API_File_Metadata_Microservice_doc_main_js",
    "name": ""
  }
] });
