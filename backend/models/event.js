const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  event: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
});

const Event = mongoose.model('Event', eventSchema);

exports.Event = Event;
