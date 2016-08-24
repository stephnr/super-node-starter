'use strict';

module.exports = () => {
  return {
    files: [
      'src/**/*.js',
      '__tests__/**',
      { pattern: '__tests__/**/*spec.js', ignore: true }
    ],

    tests: [
      '__tests__/**/*spec.js'
    ],

    env: {
      type:   'node',
      runner: '/Users/Stephen/.node/bin/babel-node'
    }
  };
};
