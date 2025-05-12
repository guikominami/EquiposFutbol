const express = require('express');
const { createJSONToken, isValidPassword } = require('../middleware/auth');
const Joi = require('joi');
const router = express.Router();
const { User } = require('../models/user');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: email });
  if (!user) return res.status(400).send('Invalid email or password.');

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).send('Invalid email or password.');

  const token = createJSONToken(email);
  res.json({ token });
});

router.post('/signup', async (req, res, next) => {
  const data = req.body;
  let errors = {};

  if (!isValidEmail(data.email)) {
    errors.email = 'Invalid email.';
  } else {
    try {
      const existingUser = await get(data.email);
      if (existingUser) {
        errors.email = 'Email exists already.';
      }
    } catch (error) {}
  }

  if (!isValidText(data.password, 6)) {
    errors.password = 'Invalid password. Must be at least 6 characters long.';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(422).json({
      message: 'User signup failed due to validation errors.',
      errors,
    });
  }

  try {
    const createdUser = await add(data);
    const authToken = createJSONToken(createdUser.email);
    res
      .status(201)
      .json({ message: 'User created.', user: createdUser, token: authToken });
  } catch (error) {
    next(error);
  }
});

function validate(user) {
  const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(4).max(1024).required(),
  });

  return schema.validate(user);
}

module.exports = router;
