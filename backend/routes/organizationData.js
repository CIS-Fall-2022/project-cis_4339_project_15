const express = require("express"); 
const router = express.Router();
require("dotenv").config();   // Require the dotenv

//importing data model schemas from models.js
let { organizationdata } = require("../models/models"); 
//Reading from .env file
const organizationName = process.env.ORGANIZATION_NAME;


//GET name of user(organization) from .env file
router.get("/header/", (req, res, next) => {
    organizationdata.find( 
        {'organization.organizationName': organizationName}, 
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        }
    );
});


module.exports = router;