const { User, validate } = require('../models/user');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const users = await User.find().sort('name');
  res.send(users);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  newUser = await newUser.save();

  res.send(newUser);
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
