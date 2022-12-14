const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const onlineshopSchema = new Schema({
  shop_name: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: false,
  }
}, { timestamps: true });

const Onlineshop = mongoose.model('Onlineshop', onlineshopSchema);
module.exports = Onlineshop;