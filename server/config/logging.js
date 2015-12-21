'use strict';

/*===============================
=            MODULES            =
===============================*/

const path = require('path');
const moment = require('moment');
const winston = require('winston');

/*=====  End of MODULES  ======*/


module.exports = app => {
  const config = app.locals.config;
  const transports = [];

  /*=========================================
  =            DEFINE TRANSPORTS            =
  =========================================*/

  // Builds Console Logging Transporter for Winston
  if(config.logging.use.console === true) {
    transports.push(new(winston.transports.Console)({
      level:     config.logging.console.level,
      timestamp: () => {
        return moment().format(config.logging.console.format);
      }
    }));
  }

  // Builds File Logging Transporter for Winston
  if(config.logging.use.file === true) {
    transports.push(new(winston.transports.DailyRotateFile)({
      datePattern: config.logging.file.rollingDatePattern,
      dirname:     path.join(config.paths.root, config.logging.file.logsDirectory),
      filename:    config.logging.file.appLogName,
      level:       config.logging.file.level,
      maxsize:     config.logging.file.logFileMaxSize
    }));
  }

  /*=====  End of DEFINE TRANSPORTS  ======*/


  // Builds Winston Logger with Transports
  const logger = new(winston.Logger)({
    exitOnError: config.logging.exitOnError,
    levels:      config.logging.levels,
    transports:  transports
  });

  /*========================================
  =            EXTENDING LOGGER            =
  ========================================*/

  logger.divider = () => {
    app.locals.logger.info('');
    app.locals.logger.info('');
  };

  logger.wrap = msg => {
    app.locals.logger.info('');
    app.locals.logger.info(msg);
    app.locals.logger.info('');
  };

  /*=====  End of EXTENDING LOGGER  ======*/


  global.logger = logger;
  app.locals.logger = logger;

  module.exports = logger;
};
