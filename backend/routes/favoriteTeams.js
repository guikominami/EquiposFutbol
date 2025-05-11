const { FavoriteTeam, validate } = require('../models/favoriteTeam');
const express = require('express');
const router = express.Router();
const { User } = require('../models/user');

router.get('/', async (req, res) => {
  res.send(await FavoriteTeam.find().sort('name'));
});

router.get('/teamid/:id', async (req, res) => {
  res.send(await FavoriteTeam.findById(req.params.id));
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

  const user = await User.findById(req.body.userId);

  if (!user)
    return res.status(400).send('The user doesn´t exist in the database.');

  var query = { userId: user, teamId: req.body.teamId };

  const favoriteTeamsByUser = await FavoriteTeam.find(query);

  console.log(favoriteTeamsByUser.length);

  if (favoriteTeamsByUser.length > 0)
    return res
      .status(400)
      .send('The team is already in the user favorite list.');

  const newFavoriteTeam = new FavoriteTeam({
    name: req.body.name,
    teamId: req.body.teamId,
    teamName: req.body.teamName,
    userId: user._id,
  });

  await newFavoriteTeam.save();

  res.send(newFavoriteTeam);
});

router.delete('/:id', async (req, res) => {
  const teamToDelete = await FavoriteTeam.findByIdAndDelete(req.params.id);

  if (!teamToDelete)
    return res
      .status(404)
      .send('The team with the given Id was not found for this user.');

  res.send(teamToDelete);
});

module.exports = router;
