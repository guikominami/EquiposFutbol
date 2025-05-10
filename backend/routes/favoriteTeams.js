const Joi = require('joi');
const express = require('express');
const router = express.Router();

function validateTeam(team) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  return schema.validate(team);
}

const favoriteTeams = [
  { id: 1, name: 'Barcelona' },
  { id: 2, name: 'Palmeiras' },
];

router.get('/', (req, res) => {
  res.send(favoriteTeams);
});

router.get('/:id', (req, res) => {
  const team = favoriteTeams.find((t) => t.id === parseInt(req.params.id));

  if (!team)
    return res.status(404).send('The team with the given Id was not found.');

  res.send(team);
});

router.post('/', (req, res) => {
  const { error } = validateTeam(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const newFavoriteTeam = {
    id: favoriteTeams.length + 1,
    name: req.body.name,
  };
  favoriteTeams.push(newFavoriteTeam);
  res.send(newFavoriteTeam);
});

router.put('/:id', (req, res) => {
  const teamToBeUpdated = favoriteTeams.find(
    (t) => t.id === parseInt(req.params.id)
  );

  if (!teamToBeUpdated)
    return res.status(404).send('The team with the given Id was not found.');

  const { error } = validateTeam(req.body);

  if (error) return res.status(400).send(error.details[0].message);

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
