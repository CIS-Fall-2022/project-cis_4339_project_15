const express = require("express"); 
const router = express.Router();

//importing data model schemas from models.js
let { primarydata, organizationdata} = require("../models/models"); 
//Reading from .env file
const organizationName = process.env.ORGANIZATION_NAME;
const retrieveOrganizationId = () => organizationdata.findOne({ "organizationName": organizationName});

//GET all entries
router.get("/", (req, res, next) => { 
    primarydata.find({'organization.organizationName': organizationName},
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        }
    ).sort({ 'updatedAt': -1 }).limit(10);
});

//GET single entry by ID
router.get("/id/:id", (req, res, next) => {
    primarydata.find( 
        { _id: req.params.id, 'organization.organizationName': organizationName }, 
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        }
    );
});

//GET entries based on search query
//Ex: '...?firstName=Bob&lastName=&searchBy=name' 
router.get("/search/", (req, res, next) => { 
    let dbQuery = "";
    if (req.query["searchBy"] === 'name') {
        dbQuery = { firstName: { $regex: `^${req.query["firstName"]}`, $options: "i" }, lastName: { $regex: `^${req.query["lastName"]}`, $options: "i" }, 'organization.organizationName': organizationName}
    } else if (req.query["searchBy"] === 'number') {
        dbQuery = {
            "phoneNumbers.primaryPhone": { $regex: `^${req.query["phoneNumbers.primaryPhone"]}`, $options: "i" }
        }
    };
    primarydata.find( 
        dbQuery, 
        (error, data) => { 
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        }
    );
});

//GET events for a single client
router.get("/events/:id", (req, res, next) => { 
    
});

//POST
router.post("/", async (req, res, next) => { 
    let organizationData = await retrieveOrganizationId();
    req.body.organization = {_id: organizationData._id, organizationName: organizationData.organizationName};
    primarydata.create( 
        req.body,
        (error, data) => { 
            if (error) {
                return next(error);
            } else {
                res.json(data); 
            }
        }
    );
    primarydata.createdAt;
    primarydata.updatedAt;
    primarydata.createdAt instanceof Date;
});

//PUT update (make sure req body doesn't have the id)
router.put("/:id", async(req, res, next) => { 
    let organizationData = await retrieveOrganizationId();
    req.body.organization = {_id: organizationData._id, organizationName: organizationData.organizationName};
    primarydata.findOneAndUpdate( 
        { _id: req.params.id }, 
        req.body,
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        }
    );
});

//DELETE client
router.delete('/deleteClient/:id', (req, res, next) => {
    primarydata.findByIdAndRemove( 
        { _id: req.params.id, 'organization.organizationName': organizationName }, 
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