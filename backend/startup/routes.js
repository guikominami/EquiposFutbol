const countries = require('../routes/countries');
const teams = require('../routes/teams');
const events = require('../routes/events');
const favoriteTeams = require('../routes/favoriteTeams');
const users = require('../routes/users');
const cors = require('../middleware/cors');

const express = require('express');

module.exports = function (app) {
  app.use(express.json());
  app.use(cors);
  //Routes
  app.use('/api/countries', countries);
  app.use('/api/teams', teams);
  app.use('/api/events', events);
  app.use('/api/favoriteTeams', favoriteTeams);
  app.use('/api/users', users);
};
