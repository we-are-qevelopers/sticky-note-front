/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
require('dotenv').config();

module.exports = {
  env: {},
  webpack(config) {
    config = {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          src: path.join(__dirname, 'src/'),
        },
      },
    };

    return config;
  },
};
