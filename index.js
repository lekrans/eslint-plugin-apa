'use strict';

module.exports.rules = {
  'monkey': require( `${__dirname}/rules/monkey.js` )
};

module.exports.configs = {
  'recommended': {
    'rules': {
      'apa/monkey': 2
    }
  }
};