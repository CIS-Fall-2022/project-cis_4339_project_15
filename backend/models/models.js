const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//collection for organizationData

let organizationDataSchema = new Schema({
    _id: { type: String, default: uuid.v1 },
    organizationName: {
        type: String,
        require: true
    }
    
},{
    collection: 'organizationData'
})
let attendeeSchema = new Schema({
    attendee_id: {type: String},
    added: {type: Date, default:Date.now}
})
//collection for intakeData
let primaryDataSchema = new Schema({
    _id: { type: String, default: uuid.v1 },
    firstName: {
        type: String,
        require: true
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    phoneNumbers: {
        type: Array,
        required: true
    },
    address: {
        line1: {
            type: String
        },
        line2: {
            type: String,
        },
        city: {
            type: String,
            required: true
        },
        county: {
            type: String,
        },
        zip: {
            type: String,
        }
    },
    organization: {
        type: organizationDataSchema
    }
}, {
    collection: 'primaryData',
    timestamps: true
});

//collection for eventData
let eventDataSchema = new Schema({
    _id: { type: String, default: uuid.v1 },
    eventName: {
        type: String,
        require: true
    },
    services: {
        type: Array
    },
    date: {
        type: Date,
        required: true
    },
    address: {
        line1: {
            type: String
        },
        line2: {
            type: String,
        },
        city: {
            type: String,
        },
        county: {
            type: String,
        },
        zip: {
            type: String,
        }
    },
    organization: {
        type: organizationDataSchema
    },
    description: {
        type: String,
    },
    attendees: [{
        type: attendeeSchema
    }],
    
}, {
    collection: 'eventData'
});

// create models from mongoose schemas
const primarydata = mongoose.model('primaryData', primaryDataSchema);
const eventdata = mongoose.model('eventData', eventDataSchema);
const organizationdata = mongoose.model('organizationData', organizationDataSchema)

// package the models in an object to export 
module.exports = { primarydata, eventdata, organizationdata }
