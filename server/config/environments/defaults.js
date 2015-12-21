'use strict';

const path = require('path');
const MAX_FILE_SIZE = 20000;
const DEFAULT_PORT = 80;

module.exports = {
  database: {
    engine:     'pg',
    connection: {
      host:     'localhost',
      user:     'postgres',
      password: 'postgres',
      database: 'app_development',
      charset:  'utf8'
    },
    poolMin: 2,
    poolMax: 10
  },
  logging: {
    exitOnError: false,
    use:         {
      console: true,
      file:    false
    },
    console: {
      level:  'debug',
      format: 'MMM. D YYYY'
    },
    file: {
      level:              'warn',
      appLogName:         'Application.log',
      logFileMaxSize:     MAX_FILE_SIZE,
      logsDirectory:      'logs',
      rollingDatePattern: '.M-d-yy || HH:mm'
    },
    levels: {
      debug: 0,
      info:  1,
      warn:  2,
      error: 3
    }
  },
  paths: {
    root: path.normalize(`${__dirname}/../../..`)
  },
  server: {
    port: process.env.PORT || DEFAULT_PORT,
    env:  process.env.NODE_ENV || 'development'
  }
};
