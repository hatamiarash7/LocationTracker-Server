'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let LocationSchema = new Schema({
    latitude: {
        type: String,
        required: "Location's latitude"
    },
    longitude: {
        type: String,
        required: "Location's longitude"
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Locations', LocationSchema);