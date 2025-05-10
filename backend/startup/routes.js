const countries = require('../routes/countries');
const teams = require('../routes/teams');
const matches = require('../routes/matches');
const favoriteTeams = require('../routes/favoriteTeams');
const users = require('../routes/users');

const express = require('express');

module.exports = function (app) {
  app.use(express.json());
  //Routes
  app.use('/api/countries', countries);
  app.use('/api/teams', teams);
  app.use('/api/matches', matches);
  app.use('/api/favoriteTeams', favoriteTeams);
  app.use('/api/users', users);
};
