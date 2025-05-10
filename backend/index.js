const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');

const logger = require('./middleware/logger');
const authenticate = require('./middleware/auth');

const countries = require('./routes/countries');
const teams = require('./routes/teams');
const matches = require('./routes/matches');
const favoriteTeams = require('./routes/favoriteTeams');
const users = require('./routes/users');

const express = require('express');
const app = express();

require('./startup/db')();

//Middleware
app.use(express.json());
//app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(helmet());

//Routes
app.use('/api/countries', countries);
app.use('/api/teams', teams);
app.use('/api/matches', matches);
app.use('/api/favoriteTeams', favoriteTeams);
app.use('/api/users', users);

if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  console.log('Morgan enabled');
}

// app.use(logger);
// app.use(authenticate);

const port = process.env.PORT | 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
