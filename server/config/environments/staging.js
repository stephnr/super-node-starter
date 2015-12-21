'use strict';

// Staging Settings
module.exports = {
  logging: {
    exitOnError: false,
    use:         {
      console: true,
      file:    false
    },
    console: {
      level: 'warn'
    }
  }
};
