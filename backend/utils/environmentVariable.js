const config = require('config');

function getEnvironmentVariable(configName) {
  const environmentVariableName = config.get(configName);
  const environmentVariable = process.env[environmentVariableName];

  return environmentVariable;
}

exports.getEnvironmentVariable = getEnvironmentVariable;
