const { FavoriteTeam, validate } = require('../models/favoriteTeam');
const express = require('express');
const router = express.Router();
const { User } = require('../models/user');

router.get('/', async (req, res) => {
  res.send(await FavoriteTeam.find().sort('name'));
});

router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user)
    return res.status(400).send('The user doesn´t exist in the database.');

  var query = { userId: user };

  const favoriteTeamsByUser = await FavoriteTeam.find(query);

  res.send(favoriteTeamsByUser);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  let newFavoriteTeam = new FavoriteTeam({
    name: req.body.name,
    countryId: req.body.countryId,
    teamId: req.body.teamId,
    userId: req.body.userId,
  });

  newFavoriteTeam = await newFavoriteTeam.save();

  res.send(newFavoriteTeam);
});

router.delete('/:id', async (req, res) => {
  const teamToDelete = await User.findByIdAndDelete(req.params.id);

  if (!teamToDelete)
    return res
      .status(404)
      .send('The teram with the given Id was not found for this user.');

  res.send(teamToDelete);
});

module.exports = router;
