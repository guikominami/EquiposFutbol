var axios = require('axios');

module.exports = function (req, res, next) {
  var config = {
    method: 'get',
    url: `https://v3.football.api-sports.io/${req.parameter}`,
    headers: {
      'x-rapidapi-key': '5af7e0af3df913ef7ec1a65c7bb24a47',
      'x-rapidapi-host': 'v3.football.api-sports.io',
    },
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};
