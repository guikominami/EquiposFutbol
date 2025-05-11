const config = require('config');
const Joi = require('joi');
const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  email: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  password: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, config.get('futbolPrivateKey'));
  return token;
};

const User = mongoose.model('User', userSchema);

function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().min(2).required(),
    password: Joi.string().min(2).required(),
  });

  return schema.validate(user);
}

exports.userSchema = userSchema;
exports.User = User;
exports.validate = validateUser;
