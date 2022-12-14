const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const citySchema = new Schema({
    city_name: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: false,
    }
}, {timestamp: true});


const City = mongoose.model('City', citySchema);
module.exports = City;