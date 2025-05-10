const axios = require('axios');
const express = require('express');
const router = express.Router();
const config = require('config');

const privateKey = config.get('privateKey-externalapi');

router.get('/', function (req, res) {
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

module.exports = router;
