'use strict';

/*===============================
=            MODULES            =
===============================*/

import * as moment from 'moment';
import * as winston from 'winston';
import env from './environment';

/*=====  End of MODULES  ======*/

/** Singleton class defining the logging instance */
class Logger {
  public transports: Array<winston.TransportInstance>;
  public instance: winston.LoggerInstance;

  /** Creates a new instance of the Winston Logging Tool */
  constructor() {
    this.transports = [];
    this.instance = null || this.instance;

    if(this.instance) {
      return;
    } else {
      /*----------- SETUP COLORS -----------*/
      winston.addColors(env.logging.console.colors);

      /*=========================================
      =            DEFINE TRANSPORTS            =
      =========================================*/

      // Builds Console Logging Transporter for Winston
      if(env.logging.use.console === true) {
        this.transports.push(new (winston.transports.Console)({
          level:     env.logging.console.level,
          colors:    env.logging.console.colors,
          timestamp: () => {
            return moment().format(env.logging.console.format);
          }
        }));
      }

      /*=====  End of DEFINE TRANSPORTS  ======*/

      // Builds Winston Logger with Transports
      this.instance = new (winston.Logger)({
        exitOnError: env.logging.exitOnError,
        levels:      env.logging.levels,
        transports:  this.transports
      });
    }
  }
}

export default (new Logger().instance);
