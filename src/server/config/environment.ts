'use strict';

/*=============================================>>>>>
= MODULES =
===============================================>>>>>*/

declare var process: any;
import WebEnvironment from './environment.d';
const SEQUELIZE_CFG = require('../../../config/config');

/*= End of MODULES =*/
/*=============================================<<<<<*/

/** Singleton defining the various server environment properties */
class Environment {
  public database: WebEnvironment.DatabaseConfig;
  public logging: WebEnvironment.LoggingConfig;
  public server: WebEnvironment.ServerConfig;

  /** Create an environment variables container */
  constructor() {
    this.database = {
      engine:     process.env.DATABASE_ENGINE,
      connection: {
        host:     SEQUELIZE_CFG.host,
        user:     SEQUELIZE_CFG.username,
        password: SEQUELIZE_CFG.password,
        database: SEQUELIZE_CFG.database,
        charset:  'utf8'
      },
      poolMin: process.env.DATABASE_POOL_MIN,
      poolMax: process.env.DATABASE_POOL_MAX
    };

    this.logging = {
      console: {
        level:  process.env.LOGGING_LEVEL,
        format: 'MMM. D YYYY',
        colors: {
          debug: 'green',
          info:  'blue',
          warn:  'yellow',
          error: 'red'
        }
      },
      exitOnError: false,
      levels:      {
        debug: 0,
        info:  1,
        warn:  2,
        error: 3
      },
      use: {
        console: Boolean(process.env.CONSOLE_LOGGING)
      },
    };

    this.server = {
      port: process.env.PORT,
      env:  process.env.NODE_ENV || 'development'
    };
  }
}

export default (new Environment());
