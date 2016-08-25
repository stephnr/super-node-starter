'use strict';

import Handles from '../services/handles';
import log from '../config/logging';
import passport from 'passport';

/*----------  FILTERS  ----------*/
import {
  requireAuth,
  checkJSON
} from '../filters';

import rules from '../models/rules';

/*=============================================>>>>>
= CONTROLLERS =
===============================================>>>>>*/

import {
  UserController
} from '../controllers';

/*= End of CONTROLLERS =*/
/*=============================================<<<<<*/

/**
 * Collection of REST endpoints for managing Users
 * @return {Object} - express router
 */
exports.UserRouter = function() {
  /*----------  BEGIN ROUTES  ----------*/
  const router = require('express').Router();
  const users = new UserController();

  /*====================================
  =            SIGNUP/LOGIN            =
  ====================================*/

  /**
   * Register a new user
   * @param  {String} '/signup'               - url path
   * @param  {Function} checkJSON(Rules.User) - verifies the JSON in the request body
   * @param  {Function} (req, res)            - callback to execute with the HTTP request and response
   * @return {Object}                         - the json response
   */
  router.post('/signup', checkJSON(rules.UserSignup), users.signup.bind(users));

  /**
   * Verifies the users login using the Passport-Local Strategy
   * @param  {String} '/login'                            - url path
   * @param  {Function} ensureValidJSON(Users.loginCreds) - verifies the JSON in the request body
   * @param  {Function} passport.authenticate('local')    - verifies the JSON contains a valid login
   * @param  {Function} (req, res)                        - callback to execute with the HTTP request and response
   * @return {Function}                                   - the json response
   */
  router.post('/login', passport.authenticate('local'), (req, res) => {
    log.debug(`Login Successful for User: ${req.user.token}`);
    return Handles.SUCCESS(res, 'Login Successful', req.user);
  });

  /**
   * Destroys the users session stored with Passport-Local Strategy
   * @param  {String} '/logout'    - url path
   * @param  {Function} (req, res) - callback to execute with the HTTP request and response
   * @return {Function}            - the json response
   */
  router.get('/logout', (req, res) => {
    req.session.regenerate(err => {
      log.debug(err);
      log.debug(`Logout Successful for User: ${req.user.email}`);
      res.redirect('/logout/success');
    });
  });

  /*============================
  =            USER            =
  =============================*/

  /**
   * Returns the User Object
   * @param  {String} '/user'       - url path
   * @param  {Function} requireAuth - verifies the user
   * @param  {Function} (req, res)  - the callback to execute with the HTTP request and response
   * @return {Object}               - the json response
   */
  router.get('/user', requireAuth, users.getUser.bind(users));

  /*----------  END ROUTES  ----------*/

  return router;
};
