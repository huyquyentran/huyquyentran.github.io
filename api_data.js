define({ "api": [
  {
    "type": "post",
    "url": "/airline",
    "title": "Create airline",
    "name": "Create_airline",
    "group": "Airline",
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
            "description": "<p>(required, max: 255) Name of the airline</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "short_name",
            "description": "<p>(required, max: 255) Short name of the airline</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "website",
            "description": "<p>(optional, max: 255) Website of the airline</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact_info",
            "description": "<p>(optional) Contact info of the airline</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>(optional) Description info of the airline</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "logo",
            "description": "<p>(optional, only allow image &lt; 15 MB ) Logo of the airline</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n   \"name\": \"Vietnam Airline\",\n   \"short_name\": \"VNA\",\n   \"contact_info\": \"Nguyen Minh Cuong\",\n   \"website\": \"https://www.vietnamairlines.com‎\",\n   \"description\": \"\"\n}",
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
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/controllers/airline.controller.js",
    "groupTitle": "Airline"
  },
  {
    "type": "get",
    "url": "/airline/:id",
    "title": "Get airline information",
    "name": "Get_airline_information",
    "group": "Airline",
    "permission": [
      {
        "name": "PUBLIC"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>(required) Unique id of airline</p>"
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
            "type": "Object",
            "optional": false,
            "field": "airline",
            "description": "<p>Airline information.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"airline\": {\n       \"id\": 1,\n       \"logo\": null,\n       \"name\": \"Vietnam Airline\",\n       \"short_name\": \"VNA\",\n       \"contact_info\": \"Nguyen Minh Cuong\",\n       \"website\": \"https://www.vietnamairlines.com‎\",\n       \"description\": \"\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/v1.0.0/airline/1",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "server/controllers/airline.controller.js",
    "groupTitle": "Airline"
  },
  {
    "type": "get",
    "url": "/airline",
    "title": "List all airline",
    "name": "List_airline",
    "group": "Airline",
    "permission": [
      {
        "name": "PUBLIC"
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
            "description": "<p>Array of airline .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"totalRecord\": 2,\n    \"totalPage\": 1,\n    \"page\": 1,\n    \"data\": [\n        {\n            \"id\": 2,\n            \"logo\": \"uploads/1572704621716_pexels-photo-1363873.jpeg\",\n            \"name\": \"Bamboo Airline\",\n            \"short_name\": \"BBA\",\n            \"contact_info\": \"Huy Quyen 0566490523\",\n            \"website\": \"https://www.bambooairlines.com.vn\",\n            \"description\": \"\"\n        },\n        {\n            \"id\": 1,\n            \"logo\": null,\n            \"name\": \"Vietnam Airline\",\n            \"short_name\": \"VNA\",\n            \"contact_info\": \"Nguyen Minh Cuong\",\n            \"website\": \"https://www.vietnamairlines.com‎\",\n            \"description\": \"\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/v1.0.0/airline\nhttp://localhost/v1.0.0/airline?page=1\nhttp://localhost/v1.0.0/airline?page=1&offset=20",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "server/controllers/airline.controller.js",
    "groupTitle": "Airline"
  },
  {
    "type": "post",
    "url": "/airline/:id",
    "title": "Update airline",
    "name": "Update_airline",
    "group": "Airline",
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
            "description": "<p>(optional, max: 255) Name of the airline</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "short_name",
            "description": "<p>(optional, max: 255) Short name of the airline</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "website",
            "description": "<p>(optional, max: 255) Website of the airline</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact_info",
            "description": "<p>(optional) Contact info of the airline</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>(optional) Description info of the airline</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "logo",
            "description": "<p>(optional, only allow image &lt; 15 MB ) Logo of the airline</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n   \"name\": \"Vietnam Airline\",\n   \"short_name\": \"VNA\",\n   \"contact_info\": \"Nguyen Minh Cuong\",\n   \"website\": \"https://www.vietnamairlines.com‎\",\n   \"description\": \"\"\n}",
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
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true,\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "server/controllers/airline.controller.js",
    "groupTitle": "Airline"
  },
  {
    "type": "get",
    "url": "/auth/me",
    "title": "Get my information",
    "name": "Get_my_information",
    "group": "Authenticate",
    "permission": [
      {
        "name": "ADMIN - STAFF - CUSTOMER"
      }
    ],
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
            "field": "data",
            "description": "<p>User Information.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"data\": {\n        \"id\": 1,\n        \"email\": \"admin@gmail.com\",\n        \"role\": \"ADMIN\",\n        \"status\": \"NEW\",\n        \"Staff\": null,\n        \"Admin\": {\n            \"id\": 1,\n            \"name\": \"ADMIN 1\",\n            \"account_id\": 1\n        },\n        \"Customer\": null\n    },\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/v1.0.0/auth/me",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "server/controllers/auth.controller.js",
    "groupTitle": "Authenticate"
  },
  {
    "type": "post",
    "url": "/auth/login",
    "title": "Login",
    "name": "Login",
    "group": "Authenticate",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>(required max:255) Email use to login</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>(required max:30) Password</p>"
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
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>User Information.</p>"
          },
          {
            "group": "Success 200",
            "type": "token",
            "optional": false,
            "field": "token",
            "description": "<p>Access token (use to authenticate).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "exp",
            "description": "<p>Expire time.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"data\": {\n        \"id\": 1,\n        \"email\": \"admin@gmail.com\",\n        \"role\": \"ADMIN\",\n        \"status\": \"NEW\",\n        \"Staff\": null,\n        \"Admin\": {\n            \"id\": 1,\n            \"name\": \"ADMIN 1\",\n            \"account_id\": 1\n        },\n        \"Customer\": null\n    },\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJzdGF0dXMiOiJORVciLCJTdGFmZiI6bnVsbCwiQWRtaW4iOnsiaWQiOjEsIm5hbWUiOiJBRE1JTiAxIiwiYWNjb3VudF9pZCI6MX0sIkN1c3RvbWVyIjpudWxsLCJleHAiOjExNTcyNDA3NDk1LCJpYXQiOjE1NzI0MDc0OTZ9.px7AW4s8tae7jBq6BG-i7dPnBQSnmmyj4wE-JSgQ7WM\",\n    \"exp\": 11572407495\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/v1.0.0/auth/login",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "server/controllers/auth.controller.js",
    "groupTitle": "Authenticate"
  },
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
            "description": "<p>(optional) Birthday.</p>"
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
    "url": "/customer/:id",
    "title": "Get customer information",
    "name": "Get_customer_information",
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
            "field": "id",
            "description": "<p>(required) Id of customer</p>"
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
            "type": "Object",
            "optional": false,
            "field": "customer",
            "description": "<p>Customer information.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"customer\": {\n        \"id\": 1,\n        \"name\": \"Customer 1\",\n        \"gender\": \"female\",\n        \"birthday\": \"1999-11-23\",\n        \"identifier\": \"37373732\",\n        \"phone\": null,\n        \"email\": \"customer1@gmail.com\",\n        \"account_id\": 6\n    }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/v1.0.0/customer/1",
        "type": "json"
      }
    ],
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
        "content": "http://localhost/v1.0.0/customer\nhttp://localhost/v1.0.0/customer?page=1\nhttp://localhost/v1.0.0/customer?page=1&offset=20",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "server/controllers/customer.controller.js",
    "groupTitle": "Customer"
  },
  {
    "type": "put",
    "url": "/customer/:id",
    "title": "Update customer",
    "name": "Update_customer",
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
            "description": "<p>(optional, max: 255) Fullname of customer</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>(optional, max: 255) Email of customer (use to login)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>(optional) Gender, valid in (Female, Male, Other)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "identifier",
            "description": "<p>(optional, max: 20) Sort direction.</p>"
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
            "description": "<p>(optional) Birthday.</p>"
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
            "description": "<p>Updated customer .</p>"
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
  }
] });
