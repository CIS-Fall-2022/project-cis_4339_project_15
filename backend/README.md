#### Contents

- [Backend](#backend)
  - [Project setup](#project-setup)
    - [Before startup](#before-startup)
    - [Compiles and hot-reloads for development](#compiles-and-hot-reloads-for-development)
- [Project 15 Backend API Documentation](#project-15-backend-api-documentation)
  - [1. Overview](#1-overview)
  - [2. Resources](#2-resources)
    - [2.1. eventData](#21-eventdata)
    - [2.2. primaryData](#22-primarydata)
    - [2.3. organizationData](#23-organizationdata)
  - [3. Testing](#3-testing)

# Backend

This implementation is for NodeJS based on [Express](https://expressjs.com/) and [MongoDB](https://www.mongodb.com/) and uses [mongoose](https://mongoosejs.com/) as the ODM.

## Project setup
```
npm install
```

### Before startup 
Setup a .env file with the following variables, e.g.:

```
MONGO_URL = mongodb+srv://<username>:<password>@cluster0.abcdc.mongodb.net/dbname
```

### Compiles and hot-reloads for development
```
npm start
```
# Project 15 Backend API Documentation

## 1. Overview
text here

## 2. Resources
text here

###  2.1. eventData
text here

###  2.2. primaryData
All APIs regarding client data will be prefaced by __primaryData/__

eg:
```
http://localhost:5000/primaryData/id/123
```

**GET Request: Retrieve a single client by id**
```
/id/123
```

**Response**
```
[
    {
        "address": {
            "line1": "123 Sesame St",
            "line2": "",
            "city": "Houston",
            "county": "Harris",
            "zip": "77023"
        },
        "_id": "2e98a250-4454-11ed-87aa-412eefe19ef7",
        "firstName": "Bob",
        "middleName": "C",
        "lastName": "John",
        "email": "johnbob@gmail.com",
        "phoneNumbers": [
            {
                "primaryPhone": "1234567890",
                "secondaryPhone": ""
            }
        ],
        "organization": {
            "_id": "b66b3980-4392-11ed-bf2a-0d13e6271c87",
            "organizationName": "test1"
        },
        "createdAt": "2022-10-05T02:19:46.811Z",
        "updatedAt": "2022-10-05T02:26:07.477Z",
        "__v": 0
    }
] 
```

**GET Request: Retrieve all clients**
```
/primaryData/
```

**Response**
```
[
    {
        "address": {
            "line1": "123 Sesame St",
            "line2": "",
            "city": "Houston",
            "county": "Harris",
            "zip": "77023"
        },
        "_id": "2e98a250-4454-11ed-87aa-412eefe19ef7",
        "firstName": "Bob",
        "middleName": "C",
        "lastName": "John",
        "email": "johnbob@gmail.com",
        "phoneNumbers": [
            {
                "primaryPhone": "1234567890",
                "secondaryPhone": ""
            }
        ],
        "organization": {
            "_id": "b66b3980-4392-11ed-bf2a-0d13e6271c87",
            "organizationName": "test1"
        },
        "createdAt": "2022-10-05T02:19:46.811Z",
        "updatedAt": "2022-10-05T02:26:07.477Z",
        "__v": 0
    }
    {
        "address": {
            "line1": "213 University Dr",
            "line2": "",
            "city": "Houston",
            "county": "Harris",
            "zip": "77024"
        },
        "_id": "123-431-23309412",
        "firstName": "Mark",
        "lastName": "Richards",
        "email": "markrchards@gmail.com",
        "phoneNumbers": [
            {
                "primaryPhone": "8324175919",
                "secondaryPhone": ""
            }
        ],
        "organization": {
            "_id": "b66b3980-4392-11ed-bf2a-0d13e6271c87",
            "organizationName": "test1"
        },
        "createdAt": "2022-10-05T02:19:46.811Z",
        "updatedAt": "2022-10-05T02:26:07.477Z",
        "__v": 0
    }
]
```

**GET Request: Search for client by name**
```
/search/?firstName=Bob&lastName=John&searchBy=name
```

**Response** 
```
[
    {
        "address": {
            "line1": "123 Sesame St",
            "line2": "",
            "city": "Houston",
            "county": "Harris",
            "zip": "77023"
        },
        "_id": "2e98a250-4454-11ed-87aa-412eefe19ef7",
        "firstName": "Bob",
        "middleName": "C",
        "lastName": "John",
        "email": "johnbob@gmail.com",
        "phoneNumbers": [
            {
                "primaryPhone": "1234567890",
                "secondaryPhone": ""
            }
        ],
        "organization": {
            "_id": "b66b3980-4392-11ed-bf2a-0d13e6271c87",
            "organizationName": "test1"
        },
        "createdAt": "2022-10-05T02:19:46.811Z",
        "updatedAt": "2022-10-05T02:26:07.477Z",
        "__v": 0
    }
]
```

**POST Request: Create a new client**
```
primaryData/
```

**PUT Request: Update Client Information**
```
/123 - With '123' being the ID of the client
```
###  2.3. organizationData
text here

## 3. Testing
text here
