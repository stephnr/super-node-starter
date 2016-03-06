'use strict';

/*=============================================>>>>>
= TYPINGS =
===============================================>>>>>*/

import * as express from 'express';
import * as sequelize from 'sequelize';

/*= End of TYPINGS =*/
/*=============================================<<<<<*/

/*=============================================>>>>>
= MODULES =
===============================================>>>>>*/

const cors = require('cors');
import uuid = require('node-uuid');
import passport = require('passport');
import bodyParser = require('body-parser');
import compression = require('compression');
import errorhandler = require('errorhandler');
import methodOverride = require('method-override');
import LocalStrategy = require('passport-local');
import session = require('express-session');

import db = require('../components/models');

/*----------  SERVICES  ----------*/

import Security = require('../components/services/security');

/*=====  End of MODULES  ======*/

/**
 * Orchestrates the middleware tools for the Express Application
 * @param  {Object} app Express Application
 */
function Middleware(app: express.Express) {
  const env = process.env.NODE_ENV;

  /*=============================================>>>>>
  = IMPORT DATABASE TABLES ORM =
  ===============================================>>>>>*/

  const Models = new db.Models();
  const Users = Models.Users;

  /*= End of IMPORT DATABASE TABLES ORM =*/
  /*=============================================<<<<<*/

  /*=============================================>>>>>
  = CLIENT MIDDLEWARE =
  ===============================================>>>>>*/

  app.set('view engine', 'ejs');
  app.engine('ejs', require('ejs').renderFile);
  app.use(express.static(`${__dirname}/../../client/public`));
  app.set('views', `${__dirname}/../../client/views`);

  /*= End of CLIENT MIDDLEWARE =*/
  /*=============================================<<<<<*/

  let sess = {
    name: 'app.sid',
    genid: (req: express.Request) => {
      return uuid.v4() // use UUIDs for session IDs
    },
    resave: true,
    rolling: true,
    saveUninitialized: false,
    secret: process.env.SECRET
  };

  if (env === 'development' || env === 'staging') {
    app.use(errorhandler());
  } else {
    app.set('trust proxy', 1); // trust first proxy
    // sess.cookie.secure = true; // serve secure cookies
  }

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
  /* Allows HTTP Method Overriding */
  app.use(methodOverride());
  /* Compresses Server Responses */
  app.use(compression());
  /* Establishes CORS headers */
  app.options(process.env.CORS, cors());

  passport.serializeUser((id: string, done: Function) => {
    done(null, id);
  });

  passport.deserializeUser((user: string, done: Function) => {
    done(null, user);
  });

  /*= End of SERVER MIDDLEWARE =*/
  /*=============================================<<<<<*/

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
    }).then(user => {
      // check password
      if(user !== null) {
        if(Security.cryptCompare(password, user.get('password'))) {
          // Password Success
          user.set('token', uuid.v4()).save();
          return done(null, user.get('token'));
        } else {
          // Password Failed
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

export = Middleware;
