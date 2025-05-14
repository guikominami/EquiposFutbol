const mongoose = require('mongoose');
const config = require('config');

module.exports = function () {
  mongoose;
  const db = process.env.MONGODB_URL;

  mongoose
    .connect(db)
    .then(() => console.log(`Connected to ${db}...`))
    .catch((err) => console.log('Could not connect to MongoDB...', err));
};
