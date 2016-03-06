/// <reference path="environment.d.ts"/>

'use strict';

/*=============================================>>>>>
= MODULE DECLARATION =
===============================================>>>>>*/

import * as environment from 'environment';

/*= End of MODULE DECLARATION =*/
/*=============================================<<<<<*/

/*=============================================>>>>>
= BUILD DEFAULTS =
===============================================>>>>>*/

var config = {
  database: {},
  logging: { exitOnError: false, use: { console: true }, console: { level: '', format: '' }, levels: {} },
  server: { port: '', env: '' }
}

/*= End of BUILD DEFAULTS =*/
/*=============================================<<<<<*/

export = {
  database: {
    engine: process.env.DATABASE_ENGINE,
    connection: {
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_ENTITY,
      charset: 'utf8'
    },
    poolMin: process.env.DATABASE_POOL_MIN,
    poolMax: process.env.DATABASE_POOL_MAX
  },

  logging: {
    exitOnError: false,
    use: {
      console: Boolean(process.env.CONSOLE_LOGGING)
    },
    console: {
      level: process.env.LOGGING_LEVEL,
      format: 'MMM. D YYYY',
      colors: {
        debug: 'green',
        info:  'blue',
        warn:  'yellow',
        error: 'red'
      }
    },
    levels: {
      debug: 0,
      info:  1,
      warn:  2,
      error: 3
    }
  },

  server: {
    port: process.env.PORT,
    env: process.env.NODE_ENV || 'development'
  }
}
