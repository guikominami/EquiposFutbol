const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('joi');
const logger = require('./logger');
const authenticate = require('./auth');

const axios = require('axios');
const express = require('express');
const app = express();

console.log(`app: ${app.get('env')}`);
console.log(`app: ${app.get('PORT')}`);

const config = require('config');

app.use(express.json());
//app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.use(helmet());

if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  console.log('Morgan enabled');
}

app.use(logger);

app.use(authenticate);

const privateKey = config.get('privateKey');

app.get('/countries', function (req, res) {
  const url = 'https://v3.football.api-sports.io/countries?';

  axios({
    method: 'get',
    url,
    headers: {
      'x-rapidapi-key': privateKey,
      'x-rapidapi-host': 'v3.football.api-sports.io',
    },
  })
    .then(function (response) {
      res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get('/teams', function (req, res) {
  let query = req.query.queryStr;
  const url = `https://v3.football.api-sports.io/teams?country=${query}`;

  axios({
    method: 'get',
    url,
    headers: {
      'x-rapidapi-key': privateKey,
      'x-rapidapi-host': 'v3.football.api-sports.io',
    },
  })
    .then(function (response) {
      res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
});

const favoriteTeams = [
  { id: 1, name: 'Barcelona' },
  { id: 2, name: 'Palmeiras' },
];

app.get('/favoriteTeams', (req, res) => {
  res.send(favoriteTeams);
});

app.get('/favoriteTeams/:id', (req, res) => {
  const team = favoriteTeams.find((t) => t.id === parseInt(req.params.id));

  if (!team)
    return res.status(404).send('The team with the given Id was not found.');

  res.send(team);
});

app.post('/favoriteTeams', (req, res) => {
  const { error } = validateTeam(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const newFavoriteTeam = {
    id: favoriteTeams.length + 1,
    name: req.body.name,
  };
  favoriteTeams.push(newFavoriteTeam);
  res.send(newFavoriteTeam);
});

app.put('/favoriteTeams/:id', (req, res) => {
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

app.delete('/favoriteTeams/:id', (req, res) => {
  const teamToBeRemoved = favoriteTeams.find(
    (t) => t.id === parseInt(req.params.id)
  );
  if (!teamToBeRemoved)
    return res.status(404).send('The team with the given Id was not found.');

  const indexTeam = favoriteTeams.indexOf(teamToBeRemoved);
  favoriteTeams.splice(indexTeam, 1);

  res.send(teamToBeRemoved);
});

app.get('/nextMatches', function (req, res) {
  console.log('next matches por time');
});

function validateTeam(team) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  return schema.validate(team);
}

const port = process.env.PORT | 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
