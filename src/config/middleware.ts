// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cors from 'cors';

import * as uuid from 'node-uuid';
import * as helmet from 'helmet';

// import {log} from './logging';

const hpp = require('hpp');

/*= End of MODULES =*/
/*=============================================<<<<<*/

/*=============================================>>>>>
= ADDITIONAL MODULES =
===============================================>>>>>*/

import Models from '../models';

/*=====  End of ADDITIONAL MODULES  ======*/

/**
 * Orchestrates the middleware tools for the Express Application
 * @param  {Object} app Express Application
 */
const middleware = function(app: express.Application) {
  const env = process.env.NODE_ENV;

  /*=============================================>>>>>
  = IMPORT DATABASE TABLES ORM =
  ===============================================>>>>>*/

  const Users = Models.Users;

  /*= End of IMPORT DATABASE TABLES ORM =*/
  /*=============================================<<<<<*/

  if (env === 'development' || env === 'staging') {
    // custom dev/staging middleware
  } else {
    // trust first proxy
    app.set('trust proxy', 1);
    // sess.cookie.secure = true; // serve secure cookies
    /* Turn on View Caching */
    app.set('view cache', true);
  }

  /*=============================================>>>>>
  = SECURITY MIDDLEWARE =
  ===============================================>>>>>*/

  /* Prevent XSS Attacks */
  app.use(helmet.xssFilter());
  /* Prevents click jacking */
  app.use(helmet.frameguard('deny'));
  /* Enforces users to use HTTPS (requires HTTPS/TLS/SSL) */
  // app.use(helmet.hsts({ maxAge: process.env.APP_HTTPS_TIMEOUT }));
  /* Hides x-powered-by header */
  app.use(helmet.hidePoweredBy());
  /* Prevent MIME type sniffing */
  app.use(helmet.noSniff());
  /* Disable Caching */
  app.use(helmet.noCache());
  /* Prevent Parameter Pollution */
  app.use(hpp());

  /*= End of SECURITY MIDDLEWARE =*/
  /*=============================================<<<<<*/

  /*=============================================>>>>>
  = SERVER MIDDLEWARE =
  ===============================================>>>>>*/

  /* Enables CORS Headers */
  app.use('*', cors());
  /* Parses the request body */
  app.use(bodyParser.urlencoded({ extended: false }));
  /* Returns request body as JSON */
  app.use(bodyParser.json());
  /* GZIP everything */
  app.use(compression());

  /*= End of SERVER MIDDLEWARE =*/
  /*=============================================<<<<<*/
};

export { middleware };
