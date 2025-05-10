const Joi = require('joi');
const JoiObjectId = require('joi-objectid')(Joi);

const mongoose = require('mongoose');
const { userSchema } = require('./user');

const favoriteTeamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  countryId: {
    type: Number,
    required: true,
  },
  teamId: {
    type: Number,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const FavoriteTeam = mongoose.model('FavoriteTeam', favoriteTeamSchema);

function validateTeam(team) {
  const schema = Joi.object({
    name: Joi.string().min(2).required(),
    countryId: Joi.number().integer().min(1).max(9999).required(),
    teamId: Joi.number().integer().min(1).max(9999).required(),
    userId: JoiObjectId().required(),
  });

  return schema.validate(team);
}

exports.FavoriteTeam = FavoriteTeam;
exports.validate = validateTeam;
