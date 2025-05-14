const { Country } = require('../models/country');
const axios = require('axios');
const express = require('express');
const router = express.Router();
const config = require('config');

const { getEnvironmentVariable } = require('../utils/environmentVariable');

router.get('/', function (req, res) {
  const url = 'https://v3.football.api-sports.io/countries';

  axios({
    method: 'get',
    url,
    headers: {
      'x-rapidapi-key': getEnvironmentVariable('privateKey-externalapi'),
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
