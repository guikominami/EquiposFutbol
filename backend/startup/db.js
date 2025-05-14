const mongoose = require('mongoose');
const config = require('config');

module.exports = function () {
  mongoose;
  const db = config.get('db');
  console.log(process.env.db);

  mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log(`Connected to ${db}...`))
    .catch((err) => console.log('Could not connect to MongoDB...', err));
};
