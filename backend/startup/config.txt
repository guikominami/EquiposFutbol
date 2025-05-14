const config = require('config');

module.exports = function () {
  if (!config.get('futbolPrivateKey')) {
    throw new Error('FATAL ERROR: futbolPrivateKey is not defined!');
  }
};
