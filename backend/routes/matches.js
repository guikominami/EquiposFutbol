const axios = require('axios');
const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  console.log('next matches por time');
});

module.exports = router;
