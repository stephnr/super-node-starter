'use strict';

/*=============================================>>>>>
= MODULES =
===============================================>>>>>*/

import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import LocalStrategy from 'passport-local';
import passport from 'passport';

import session from 'express-session';
import uuid from 'node-uuid';
import helmet from 'helmet';

import log from './logging';

import hpp from 'hpp';

const RedisStore = require('connect-redis')(session);
const sessionStore = new RedisStore({ url: process.env.REDISCLOUD_URL });

/*= End of MODULES =*/
/*=============================================<<<<<*/

/*=============================================>>>>>
= ADDITIONAL MODULES =
===============================================>>>>>*/

import Models from '../models';

/*----------  SERVICES  ----------*/

import Security from '../services/security';

/*=====  End of ADDITIONAL MODULES  ======*/

/**
 * Orchestrates the middleware tools for the Express Application
 * @param  {Object} app Express Application
 */
exports.Middleware = function(app) {
  const env = process.env.NODE_ENV;

  /*=============================================>>>>>
  = IMPORT DATABASE TABLES ORM =
  ===============================================>>>>>*/

  const Users = Models.Users;

  /*= End of IMPORT DATABASE TABLES ORM =*/
  /*=============================================<<<<<*/

  const sess = {
    name:         'SNS.sid',
    genid: req => {
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
  /* parses cookies */
  app.use(cookieParser());
  /* Parses the request body */
  app.use(bodyParser.urlencoded({ extended: false }));
  /* Returns request body as JSON */
  app.use(bodyParser.json());
  /* Establishes an Express Session */
  app.use(session(sess));
  /* Imports Passport Middleware */
  app.use(passport.initialize());
  /* Manages the same Cookie Session */
  app.use(passport.session());
  /* GZIP everything */
  app.use(compression());

  /*= End of SERVER MIDDLEWARE =*/
  /*=============================================<<<<<*/

  passport.serializeUser((user, done) => {
    done(null, user.token);
  });

  passport.deserializeUser((token, done) => {
    Users.findOne({
      where: { token: token }
    }).then(user => {
      if(user) {
        done(null, user.toJSON());
      } else {
        done(null, {});
      }
    });
  });

  /*===============================================
  =            LOCAL PASSPORT STRATEGY            =
  ===============================================*/

  const localStrategy = new LocalStrategy.Strategy({
    usernameField: 'email',
    passwordField: 'password'
  }, (username, password, done) => {
    // Fetch matching user by email
    Users.findOne({
      where: { email: username }
    }).then(user => {
      // check password
      if(user !== null) {
        if(Security.cryptCompare(password, user.get('password'))) {
          // Password Success
          user.set('token', uuid.v4()).save().then(() => {
            return done(null, { id: user.get('id'), token: user.get('token') }, { messge: 'Success' });
          }).catch(err => {
            log.debug(err);
            return done(null, false, { message: 'Failed to set new user token securely' });
          });
        } else {
          // Password Failed
          return done(null, false, { message: 'Password Failed' });
        }
      } else {
        // No User Found
        return done(null, false, { message: `No User exists with Email: ${username}` });
      }
    }).catch(err => {
      log.debug(err);
      return done(null, false, { message: err });
    });
  });

  /*=====  End of LOCAL PASSPORT STRATEGY  ======*/

  passport.use(localStrategy);

  /*= End of MODULES =*/
  /*=============================================<<<<<*/
};
