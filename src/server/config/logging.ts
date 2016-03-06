'use strict';

/*===============================
=            MODULES            =
===============================*/

import * as express from 'express';

import moment = require('moment');
import winston = require('winston');
import config = require('./environment');

/*=====  End of MODULES  ======*/

module logEngine {
  export class Logger {
    instance: winston.LoggerInstance;

    constructor() {
      /**
       * Builds the Logging framework
       * @return log Winston Logging Instance
       */
      const transports: Array<winston.TransportInstance> = [];
      var instance: winston.LoggerInstance = null;

      /*=========================================
      =            DEFINE TRANSPORTS            =
      =========================================*/

      // Builds Console Logging Transporter for Winston
      if (config.logging.use.console === true) {
        transports.push(new (winston.transports.Console)({
          level:  config.logging.console.level,
          colors: config.logging.console.colors,
          timestamp: () => {
            return moment().format(config.logging.console.format);
          }
        }));
      }

      /*=====  End of DEFINE TRANSPORTS  ======*/


      // Builds Winston Logger with Transports
      this.instance = new (winston.Logger)({
        exitOnError: config.logging.exitOnError,
        levels: config.logging.levels,
        transports: transports
      });
    }
  }
}

export = logEngine;
