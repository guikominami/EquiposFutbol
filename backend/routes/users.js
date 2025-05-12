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

  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: email });

  if (user) return res.status(400).send('User already registered.');

  user = new User({
    name: req.body.name,
    email: email,
    password: password,
  });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  try {
    await user.save();
    const authToken = createJSONToken(user.email);
    console.log(authToken);
    res
      .status(201)
      .json({ message: 'User created.', user: user, token: authToken });
  } catch (error) {
    console.log(error);
  }

  res
    .header('x-auth-token', token)
    .send(_.pick(user, ['_id', 'name', 'email']));
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const userToUpdate = await User.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      email: req.body.email,
      password: req.body.passeword,
    },
    { new: true }
  );

  if (!userToUpdate)
    return res.status(404).send('The user with the given Id was not found.');

  res.send(userToUpdate);
});

router.delete('/:id', async (req, res) => {
  const userToDelete = await User.findByIdAndDelete(req.params.id);

  if (!userToDelete)
    return res.status(404).send('The user with the given Id was not found.');

  res.send(userToDelete);
});

router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user)
    return res.status(404).send('The user with the given Id was not found.');

  res.send(user);
});

module.exports = router;
