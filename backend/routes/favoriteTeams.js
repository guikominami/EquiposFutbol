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
    userId: req.body.userId,
  });

  newFavoriteTeam = await newFavoriteTeam.save();

  res.send(newFavoriteTeam);
});

router.put('/:id', (req, res) => {
  const { error } = validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const teamToBeUpdated = favoriteTeams.find(
    (t) => t.id === parseInt(req.params.id)
  );

  if (!teamToBeUpdated)
    return res.status(404).send('The team with the given Id was not found.');

  teamToBeUpdated.name = req.body.name;
  res.send(teamToBeUpdated);
});

router.delete('/:id', (req, res) => {
  const teamToBeRemoved = favoriteTeams.find(
    (t) => t.id === parseInt(req.params.id)
  );
  if (!teamToBeRemoved)
    return res.status(404).send('The team with the given Id was not found.');

  const indexTeam = favoriteTeams.indexOf(teamToBeRemoved);
  favoriteTeams.splice(indexTeam, 1);

  res.send(teamToBeRemoved);
});

module.exports = router;
