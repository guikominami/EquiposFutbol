const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');
const logger = require('./middleware/logger');
const authenticate = require('./middleware/auth');

const countries = require('./routes/countries');
const teams = require('./routes/teams');
const matches = require('./routes/matches');
const favoriteTeams = require('./routes/favoriteTeams');

const express = require('express');
const app = express();

require('./startup/db')();

app.use(express.json());
//app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.use(helmet());

app.use('/api/countries', countries);
app.use('/api/teams', teams);
app.use('/api/matches', matches);
app.use('/api/favoriteTeams', favoriteTeams);

console.log('Application name: ' + config.get('name'));

if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  console.log('Morgan enabled');
}

app.use(logger);

app.use(authenticate);

const port = process.env.PORT | 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
