const axios = require('axios');
const express = require('express');
const router = express.Router();
const config = require('config');

const dataTeams = require('../datamock/events.json');

router.get('/next/:teamid', function (req, res) {
  //receber dados locais
  if (config.get('test') === 'mock') {
    res.send(JSON.stringify(dataTeams));
    return;
  }

  const url = `https://v3.football.api-sports.io/fixtures?season=2023&team=${req.params.teamid}`;

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

module.exports = router;
