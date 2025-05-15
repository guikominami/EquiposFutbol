const error = require('./middleware/errors');
const express = require('express');
const app = express();

require('./startup/db')();
require('./startup/config')();
require('./startup/routes')(app);
app.use(error);

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
