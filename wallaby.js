'use strict';

require('dotenv').config();

module.exports = () => {
  return {
    files: [
      'config/**',
      'bin/**',
      'test/**',
      { pattern: 'test/**/*spec.js', ignore: true }
    ],

    tests: [
      'test/**/*spec.js'
    ],

    env: {
      type: 'node'
    },

    testFramework: 'mocha'
  };
};
