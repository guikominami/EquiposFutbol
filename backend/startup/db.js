const mongoose = require('mongoose');
const config = require('config');

module.exports = function () {
  mongoose;

  const environmentVariableName = config.get('db');
  const db = process.env[environmentVariableName];

  mongoose
    .connect(db)
    .then(() => console.log(`Connected to ${db}...`))
    .catch((err) => console.log('Could not connect to MongoDB...', err));
};
