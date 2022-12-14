const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
    name_en: {
        type: String,
        required: true,
    },
    name_ar: {
        type: String,
        required: false,
    },
    city: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,
    },
    website: {
        type: String,
        required: false,
    },
    snapchat: {
        type: String,
        required: false,
    },
    twitter: {
        type: String,
        required: false,
    },
    instgram : {
        type: String,
        required: false,
    },
    logo: {
        type: String,
        required: false,
    },
    location: {
        type: String,
        required: false,
    }
}, {timestamp: true});

const Place = mongoose.model('Place', placeSchema);
module.exports = Place;