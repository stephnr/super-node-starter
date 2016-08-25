'use strict';

require('dotenv').config();

module.exports = () => {
  return {
    files: [
      'config/**',
      'bin/**',
      '__tests__/**',
      { pattern: '__tests__/**/*spec.js', ignore: true }
    ],

    tests: [
      '__tests__/**/*spec.js'
    ],

    bootstrap: () => {
      require('chai').should();
      global.expect = require('chai').expect;
      global.assert = require('chai').assert;
    },

    env: {
      type: 'node'
    },

    testFramework: 'mocha'
  };
};
