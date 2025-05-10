const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  code: {
    type: String,
    required: true,
    length: 2,
  },
  flag: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
});

const Country = mongoose.model('Country', countrySchema);

exports.Country = Country;
