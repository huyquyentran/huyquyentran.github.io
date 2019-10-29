define({ "api": [
  {
    "type": "post",
    "url": "/customer",
    "title": "Create customer",
    "name": "Create_customer",
    "group": "Customer",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "ADMIN - STAFF"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>(required, max: 255) Fullname of customer</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>(required, max: 255) Email of customer (use to login)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>(required) Gender, valid in (Female, Male, Other)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "identifier",
            "description": "<p>(required, max: 20) Sort direction.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>(optional) Phone of customer.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>(optional) Sort direction.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n  \"email\": \"customer1@gmail.com\",\n  \"name\": \"Customer 1\",\n  \"gender\": \"female\",\n  \"birthday\": \"1999-11-23\",\n  \"identifier\": \"37373732123\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Request successfully</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "customer",
            "description": "<p>New customer .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"customer\": {\n      \"id\": 5,\n      \"email\": \"customer1@gmail.com\",\n      \"name\": \"Customer 1\",\n      \"gender\": \"female\",\n      \"birthday\": \"1999-11-23\",\n      \"identifier\": \"37373732123\",\n      \"account_id\": 11\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/controllers/customer.controller.js",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/customer",
    "title": "List all customer",
    "name": "List_customer",
    "group": "Customer",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "ADMIN - STAFF"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>(optional) Number of records per page</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>(optional) Number of pages</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>(optional) Sort by field. Default: id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "direction",
            "description": "<p>(optional) Sort direction. Defaullt: DESC</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Request successfully</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalRecord",
            "description": "<p>Total record in database.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPage",
            "description": "<p>Total page (Depends on offset).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Current page.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>Array of customer .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"totalRecord\": 2,\n    \"totalPage\": 1,\n    \"page\": 1,\n    \"data\": [\n        {\n            \"id\": 2,\n            \"name\": \"Customer 2\",\n            \"gender\": \"female\",\n            \"birthday\": \"1999-11-23\",\n            \"identifier\": \"373737323\",\n            \"phone\": null,\n            \"email\": \"customer2@gmail.com\",\n            \"account_id\": 8\n        },\n        {\n            \"id\": 1,\n            \"name\": \"Customer 1\",\n            \"gender\": \"female\",\n            \"birthday\": \"1999-11-23\",\n            \"identifier\": \"37373732\",\n            \"phone\": null,\n            \"email\": \"customer1@gmail.com\",\n            \"account_id\": 6\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/customer\nhttp://localhost/customer?page=1\nhttp://localhost/customer?page=1&offset=20",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "server/controllers/customer.controller.js",
    "groupTitle": "Customer"
  }
] });
