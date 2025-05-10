const { Country } = require('../models/country');
const axios = require('axios');
const express = require('express');
const router = express.Router();
const config = require('config');

const privateKey = config.get('privateKey-externalapi');

//MOCKUP
router.get('/', async (req, res) => {
  const countries = await Country.find().sort('name');
  res.send(countries);
});

//ROTA EXTERNA
// router.get('/external', function (req, res) {
//   const url = 'https://v3.football.api-sports.io/countries';

//   axios({
//     method: 'get',
//     url,
//     headers: {
//       'x-rapidapi-key': privateKey,
//       'x-rapidapi-host': 'v3.football.api-sports.io',
//     },
//   })
//     .then(function (response) {
//       res.send(JSON.stringify(response.data));
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// });

module.exports = router;
