const { User, validate } = require('../models/user');
const express = require('express');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const { createJSONToken, isValidPassword } = require('../middleware/auth');

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await User.find().sort('name');
  res.send(users);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send('User already registered.');

  user = new User(_.pick(req.body, ['name', 'email', 'password', 'isAdmin']));
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();

  const token = user.generateAuthToken();
  res
    .header('x-auth-token', token)
    .send(_.pick(user, ['_id', 'name', 'email', 'isAdmin']));
});

router.delete('/:id', async (req, res) => {
  const userToDelete = await User.findByIdAndDelete(req.params.id);

  if (!userToDelete)
    return res.status(404).send('The user with the given Id was not found.');

  res.send(userToDelete);
});

module.exports = router;
