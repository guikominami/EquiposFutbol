const error = require('./middleware/errors');
const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const express = require('express');
const app = express();

require('./startup/db')();
require('./startup/routes')(app);
app.use(error);

if (!config.get('jwtPrivateKey')) {
  console.error('FATAL ERROR: jwtPrivateKey is not defined.');
  process.exit(1);
}

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
