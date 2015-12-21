'use strict';

/*===============================
=            MODULES            =
===============================*/

const cors = require('cors');
const passport = require('passport');
const bodyParser = require('body-parser');
const compression = require('compression');
const errorhandler = require('errorhandler');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const methodOverride = require('method-override');

/*=====  End of MODULES  ======*/


module.exports = function(app) {
  const env = process.env.NODE_ENV;

  /* Enables CORS Headers */
  app.use(cors());
  /* Exposes Cookies as req.cookies */
  app.use(cookieParser());
  /* Establishes a Session using Cookies */
  app.use(cookieSession({
    name:   'SESSIONID',
    secret: process.env.SECRET_KEY,
    keys:   process.env.COOKIE_KEYS.split(',')
  }));
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
  app.options('*', cors());

  passport.serializeUser((id, done) => {
    // should manage the user somehow
    done(null, id);
  });

  passport.deserializeUser((user, done) => {
    // should manage the user somehow
    done(null, user);
  });

  if(env === 'development' || env === 'staging') {
    app.use(errorhandler());
  }
};
