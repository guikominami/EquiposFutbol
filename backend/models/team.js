const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
});

const Team = mongoose.model('Team', teamSchema);

exports.Team = Team;
