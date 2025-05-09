const Joi = require('joi');
const axios = require('axios');
const express = require('express');
const app = express();

const config = require('config');

app.use(express.json());

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

app.post('/favoriteTeams', (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const newFavoriteTeam = {
    id: favoriteTeams.length + 1,
    name: req.body.name,
  };
  favoriteTeams.push(newFavoriteTeam);
  res.send(newFavoriteTeam);
});

app.get('/nextMatches', function (req, res) {
  console.log('next matches por time');
});

const port = process.env.PORT | 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
