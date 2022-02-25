const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = (envVariables) => {
  // using module.exports like this, we have access to the environment variables
  // the env is set in the package.json file to determine dev or prod environments
  const { env } = envVariables;
  const envConfig = require(`./webpack.${env}.js`); // after getting the env, we get the necessary webpack config
  const config = merge(commonConfig, envConfig);

  return config;
};
