'use strict';

module.exports.rules = {
  'no-this': require( `${__dirname}/rules/monkey.js` )
};

module.exports.configs = {
  'recommended': {
    'rules': {
      'apa/monkey': 2
    }
  }
};