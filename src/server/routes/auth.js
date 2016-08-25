'use strict';

/*===============================
=            MODULES            =
===============================*/

import Handles from '../services/handles';
import log from '../config/logging';
import passport from 'passport';

/*=====  End of MODULES  ======*/


/**
 * Collection of REST endpoints for authentication
 * @return {Object} - express router
 */
exports.AuthRouter = function() {
  /*----------  BEGIN ROUTES  ----------*/
  const router = require('express').Router();

  /*====================================
  =            SIGNUP/LOGIN            =
  ====================================*/

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

  return router;
};
