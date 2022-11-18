const express = require("express");
const router = express.Router();
require("dotenv").config();   // Require the dotenv

//importing data model schemas from models.js
let { eventdata, organizationdata } = require("../models/models"); 
//Reading from .env file
const organizationName = process.env.ORGANIZATION_NAME;
const retrieveOrganizationId = () => organizationdata.findOne({ "organizationName": organizationName});

//GET all entries for the organization
router.get("/", (req, res, next) => { 
    eventdata.find({'organization.organizationName': organizationName},
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
    eventdata.find({ _id: req.params.id, 'organization.organizationName': organizationName}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

//GET entries based on search query
//Ex: '...?eventName=Food&searchBy=name' 
router.get("/search/", (req, res, next) => { 
    let dbQuery = "";
    if (req.query["searchBy"] === 'name') {
        dbQuery = { eventName: { $regex: `^${req.query["eventName"]}`, $options: "i" }, 'organization.organizationName': organizationName}
    } else if (req.query["searchBy"] === 'date') {
        dbQuery = {
            date:  req.query["eventDate"],
            organization: {organizationName: organizationName}
        }
    };
    eventdata.find( 
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

//GET events for which a client is signed up
router.get("/client/:id", (req, res, next) => { 
    eventdata.find( 
        { "attendees.attendees_id": req.params.id, 'organization.organizationName': organizationName}, 
        (error, data) => { 
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        }
    );
});

//POST
router.post("/", async (req, res, next) => { 
    let organizationData = await retrieveOrganizationId();
    req.body.organization = {_id: organizationData._id, organizationName: organizationData.organizationName};
    eventdata.create( 
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

//PUT
router.put("/:id", async (req, res, next) => {
    let organizationData = await retrieveOrganizationId();
    req.body.organization = {_id: organizationData._id, organizationName: organizationData.organizationName};
    eventdata.findOneAndUpdate(
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

//PUT add attendee to event
router.put("/addAttendee/:id", async (req, res, next) => {
    //only add attendee if not yet signed up'
    let organizationData = await retrieveOrganizationId();
    eventdata.find( 
        { _id: req.params.id, attendees: req.body.attendee, organization: {organizationId: organizationData._id, organizationName: organizationData.organizationName} }, 
        (error, data) => { 
            if (error) {
                return next(error);
            } else {
                if (data.length == 0) {
                    eventdata.updateOne(
                        { _id: req.params.id }, 
                        { $push: { attendees: {attendee_id: req.body.attendee} } },
                        (error, data) => {
                            if (error) {
                                consol
                                return next(error);
                            } else {
                                res.json(data);
                            }
                        }
                    );
                }
                
            }
        }
    );
    
});

//DELETE event
router.delete('/deleteEvent/:id', (req, res, next) => {
    eventdata.findByIdAndRemove( 
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