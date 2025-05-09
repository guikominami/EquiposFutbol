const axios = require('axios');
const express = require('express');
const app = express();
const config = require('config');
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

app.listen(3000, () => console.log('Listening on port 3000...'));
