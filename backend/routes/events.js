const { Event } = require('../models/event');

const axios = require('axios');
const express = require('express');
const router = express.Router();

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

router.get('/', async (req, res) => {
  const event = await Event.find();
  res.send(event);
});

router.get('/external/', function (req, res) {
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
