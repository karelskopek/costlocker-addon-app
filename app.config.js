// Vendor.
const isDev = require('electron-is-dev');

// Prepare the config.
const config = {};

if (isDev) {
  config.APP_URL = 'http://localhost:3000';
} else {
  config.APP_URL = 'http://frontend.addon.costlocker.sandbox.2fresh.cz';
}

module.exports = Object.freeze(config);
