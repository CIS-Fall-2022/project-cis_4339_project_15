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
cd backend
npm install
npm start app.js
```

### Before startup 
Setup a .env file with the following variables, e.g.:

```
MONGO_URL = mongodb+srv://Global1:1234@cluster0.rulkd0x.mongodb.net/?retryWrites=true&w=majority
ORGANIZATION_NAME = test1
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
All APIs regarding client data will be prefaced by __eventData/__

eg:
```
http://localhost:5000/eventData/id/123
```
**GET Request: Retrieve a single event by id**
```
/id/123
```

**Response**
```
[
    {
        "address": {
            "line1": "",
            "line2": "",
            "city": "",
            "county": "",
            "zip": ""
        },
        "_id": "c7baee01-4398-11ed-bb1e-0180165e2a2f",
        "eventName": "Halloween Party",
        "services": [],
        "date": "2022-10-31T00:00:00.000Z",
        "organization": {
            "_id": "c7baee00-4398-11ed-bb1e-0180165e2a2f",
            "organizationName": "test1"
        },
        "description": "",
        "attendees": [
            "2e98a250-4454-11ed-87aa-412eefe19ef7"
        ],
        "__v": 0
    }
]
```
**GET Request: Retrieve all events**
```
/eventData/
```

**Response**
```
[
    {
        "address": {
            "line1": "",
            "line2": "",
            "city": "",
            "county": "",
            "zip": ""
        },
        "_id": "837b2030-43a6-11ed-ae55-7f2103ece64f",
        "eventName": "test6",
        "services": [],
        "date": "2022-10-10T00:00:00.000Z",
        "organization": {
            "_id": "837af920-43a6-11ed-ae55-7f2103ece64f",
            "organizationName": "test1"
        },
        "description": "",
        "attendees": [],
        "__v": 0
    },
    {
        "address": {
            "line1": "",
            "line2": "",
            "city": "",
            "county": "",
            "zip": ""
        },
        "_id": "958f1dd1-43a6-11ed-b200-8fd8b031ab18",
        "eventName": "test7",
        "services": [],
        "date": "2022-08-12T00:00:00.000Z",
        "organization": {
            "_id": "958f1dd0-43a6-11ed-b200-8fd8b031ab18",
            "organizationName": "test1"
        },
        "description": "",
        "attendees": [],
        "__v": 0
    },
    {
        "address": {
            "line1": "",
            "line2": "",
            "city": "",
            "county": "",
            "zip": ""
        },
        "_id": "a9edf5d1-43a6-11ed-a85d-0d67e3f09d65",
        "eventName": "test8",
        "services": [],
        "date": "2222-02-22T00:00:00.000Z",
        "organization": {
            "_id": "a9edf5d0-43a6-11ed-a85d-0d67e3f09d65",
            "organizationName": "test1"
        },
        "description": "",
        "attendees": [],
        "__v": 0
    },
    {
        "address": {
            "line1": "",
            "line2": "",
            "city": "",
            "county": "",
            "zip": ""
        },
        "_id": "bd009ec0-43a6-11ed-9c63-5f434bc42d63",
        "eventName": "plswork",
        "services": [],
        "date": "2212-02-22T00:00:00.000Z",
        "organization": {
            "_id": "b66b3980-4392-11ed-bf2a-0d13e6271c87",
            "organizationName": "test1"
        },
        "description": "",
        "attendees": [],
        "__v": 0
    }
]
```
**GET Request: Retrieve events for which a client is signed up for**
```
/client/id/2e98a250-4454-11ed-87aa-412eefe19ef7
```

**Response** 
```
[
    {
        "address": {
            "line1": "",
            "line2": "",
            "city": "",
            "county": "",
            "zip": ""
        },
        "_id": "c7baee01-4398-11ed-bb1e-0180165e2a2f",
        "eventName": "Halloween Party",
        "services": [],
        "date": "2022-10-31T00:00:00.000Z",
        "organization": {
            "_id": "c7baee00-4398-11ed-bb1e-0180165e2a2f",
            "organizationName": "test1"
        },
        "description": "",
        "attendees": [
            "2e98a250-4454-11ed-87aa-412eefe19ef7"
        ],
        "__v": 0
    }
]
```
**POST Request: Create a new event**
```
eventData/
```

**PUT Request: Update event information**
```
/123 - With '123' being the ID of the event
```

**DELETE Request: Delete a single event by id**
```
/deleteEvent/123
```

**Response**
```
{
    "address": {
        "line1": "",
        "line2": "",
        "city": "",
        "county": "",
        "zip": ""
    },
    "_id": "bd009ec0-43a6-11ed-9c63-5f434bc42d63",
    "eventName": "plswork",
    "services": [],
    "date": "2212-02-22T00:00:00.000Z",
    "organization": {
        "_id": "b66b3980-4392-11ed-bf2a-0d13e6271c87",
        "organizationName": "test1"
    },
    "description": "",
    "attendees": [],
    "__v": 0
}
```

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

**DELETE Request: Delete a  single client by id**

```
/deleteClient/123
```

**Response** 
```
null
```
###  2.3. organizationData

All APIs regarding client data will be prefaced by __organizationData/__

eg:
```
http://localhost:5000/organizationData/header
```
**GET Request: Retrieve organization data**
```
/header
```

**Response** 
```
[
    {
        "_id": "b66b3980-4392-11ed-bf2a-0d13e6271c87",
        "organizationName": "test1",
        "__v": 0
    }
]
```

## 3. Testing
text here
