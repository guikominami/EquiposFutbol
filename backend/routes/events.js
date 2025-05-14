const { Event } = require('../models/event');

const axios = require('axios');
const express = require('express');
const config = require('config');
const router = express.Router();

const privateKey = config.get('privateKey-externalapi');

//MOCK
router.get('/:teamName', async (req, res) => {
  const teamName = req.params.teamName;

  const event = await Event.find({
    $or: [
      {
        'teams.home.name': teamName,
      },
      {
        'teams.away.name': teamName,
      },
    ],
  });
  res.send(event);
});

router.get('/next/:teamid', function (req, res) {
  const url = `https://v3.football.api-sports.io/fixtures?season=2023&team=${req.params.teamid}`;

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

module.exports = router;

router.get('/liveall/teamid', function (req, res) {
  const url = 'https://v3.football.api-sports.io/fixtures?live=all';

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

module.exports = router;
