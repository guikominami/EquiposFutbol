const { Team } = require('../models/team');
const axios = require('axios');
const express = require('express');
const router = express.Router();
const config = require('config');

const dataTeams = require('../datamock/teams.json');

router.get('/bycountry/:country', function (req, res) {
  const url = `https://v3.football.api-sports.io/teams?country=${req.params.country}`;

  axios({
    method: 'get',
    url,
    headers: {
      'x-rapidapi-key': config.get('privateKey-externalapi'),
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

router.get('/byteam/:team', function (req, res) {
  const mock = config.get('test');

  if (mock === 'true') {
    res.send(JSON.stringify(dataTeams));
    return;
  }

  const url = `https://v3.football.api-sports.io/teams?search=${req.params.team}`;

  axios({
    method: 'get',
    url,
    headers: {
      'x-rapidapi-key': config.get('privateKey-externalapi'),
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

router.get('/id/:id', function (req, res) {
  const url = `https://v3.football.api-sports.io/teams?id=${req.params.id}`;

  axios({
    method: 'get',
    url,
    headers: {
      'x-rapidapi-key': config.get('privateKey-externalapi'),
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

//TEAM AWAY INFO
//https://v3.football.api-sports.io/teams?id=289

module.exports = router;
