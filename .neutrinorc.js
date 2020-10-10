// const airbnb = require('@neutrinojs/airbnb');
const react = require('@neutrinojs/react');
// const jest = require('@neutrinojs/jest');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    // airbnb(),
    react({
      html: {
        title: 'photo-viewer'
      },
      env: {
        "UNSPLASH_ACCESS_KEY": "YTV4e8DRVM4-QDJehB-lWnRus-LlllyF1BGFgzVkivs",
        "UNSPLASH_SECRET_KEY": "DuEjNAy2-UNqWTldZM3bkvALjiIfKDgR1h4oxdpMD7o"
      }
    }),
    // jest(),
  ],
};
