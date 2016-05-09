'use strict';

/*=============================================>>>>>
= TYPINGS =
===============================================>>>>>*/

import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cors from 'cors';
import * as errorhandler from 'errorhandler';
import * as express from 'express';
import * as _ from 'lodash';
import * as LocalStrategy from 'passport-local';
import * as path from 'path';
import * as passport from 'passport';
import * as session from 'express-session';
import * as sequelize from 'sequelize';
import * as uuid from 'node-uuid';
import * as helmet from 'helmet';

import log from './logging';

const hpp = require('hpp');
const RedisStore = require('connect-redis')(session);
const sessionStore = new RedisStore({ url: process.env.REDISCLOUD_URL });

/*= End of TYPINGS =*/
/*=============================================<<<<<*/

/*=============================================>>>>>
= MODULES =
===============================================>>>>>*/

import db from '../components/models';

/*----------  SERVICES  ----------*/

import * as Security from '../components/services/security';

/*=====  End of MODULES  ======*/

/**
 * Orchestrates the middleware tools for the Express Application
 * @param  {Object} app Express Application
 */
export default function Middleware(app: express.Express) {
  const env = process.env.NODE_ENV;

  /*=============================================>>>>>
  = IMPORT DATABASE TABLES ORM =
  ===============================================>>>>>*/

  const Models = new db();
  const Users = Models.Users;

  /*= End of IMPORT DATABASE TABLES ORM =*/
  /*=============================================<<<<<*/

  const sess = {
    name:         'nodeStarter.sid',
    genid: (req: express.Request) => {
      // use UUIDs for session IDs
      return uuid.v4();
    },
    resave:            true,
    rolling:           true,
    saveUninitialized: false,
    secret:            process.env.SECRET,
    store:             sessionStore
  };

  if (env === 'development' || env === 'staging') {
    app.use(errorhandler({log: (err: Error, str: string, req: express.Request) => {
      log.debug('===== SHOWING ERROR =====');
      log.debug(str);
      log.debug(req.method);
      log.debug(req.url);
      log.debug('===== END ERROR DISPLAY =====');
    }}));
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
  app.use(cors());
  /* Establishes an Express Session */
  app.use(session(sess));
  /* Imports Passport Middleware */
  app.use(passport.initialize());
  /* Manages the same Cookie Session */
  app.use(passport.session());
  /* Parses the request body */
  app.use(bodyParser.urlencoded({ extended: false }));
  /* Returns request body as JSON */
  app.use(bodyParser.json());
  /* GZIP everything */
  app.use(compression());
  /* Establishes CORS headers */
  app.options(process.env.CORS, cors());

  /*= End of SERVER MIDDLEWARE =*/
  /*=============================================<<<<<*/

  passport.serializeUser((user: any, done: Function) => {
    done(null, user.token);
  });

  passport.deserializeUser((token: any, done: Function) => {
    Users.findOne({
      where: { token: token }
    }).then((user: any) => {
      done(null, _.omit(user.toJSON(), 'password'));
    });
  });

  /*===============================================
  =            LOCAL PASSPORT STRATEGY            =
  ===============================================*/

  var localStrategy: LocalStrategy.Strategy = new LocalStrategy.Strategy({
    usernameField: 'email',
    passwordField: 'password'
  }, (username: string, password: string, done: Function) => {
    // Fetch matching user by email
    Users.findOne({
      where: { email: username }
    }).then((user: any) => {
      // check password
      if(user !== null) {
        if(Security.cryptCompare(password, user.get('password'))) {
          // Password Success
          user.set('token', uuid.v4()).save().then(() => {
            return done(null, { id: user.get('id'), token: user.get('token') });
          });
        } else {
          // Password Failed
          return done(null, false, { message: 'Password Failed' });
        }
      } else {
        // No User Found
        return done(null, false, { message: `No User exists with Email: ${username}` });
      }
    }).catch((err: sequelize.BaseError) => {
      return done(null, false, { message: err });
    });
  });

  passport.use(localStrategy);

  /*=====  End of LOCAL PASSPORT STRATEGY  ======*/

  /*= End of MODULES =*/
  /*=============================================<<<<<*/
}
