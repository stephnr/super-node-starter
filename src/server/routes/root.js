'use strict';

/*=============================================>>>>>
= TYPINGS =
===============================================>>>>>*/

import Handles from '../services/handles';

/*= End of TYPINGS =*/
/*=============================================<<<<<*/

/**
 * Root API Router
 * @return {Object}    - the express router
 */
exports.RootRouter = function() {
  const router = require('express').Router();

  /**
   * Sample Hello World route
   * @function
   * @param  {String} '/'   - url route
   * @param  {Function}     - (req, res) contains the request and response of the URL
   * @return {String}       - json response
   */
  router.get('/', (req, res) => {
    return Handles.SUCCESS(res, 'Welcome to the RunTheCall API');
  });

  /**
   * Represents a successful logout event
   * @param  {String}           '/logout/success' - url path
   * @param  {Function} (req, res)                - callback to execute with the HTTP request and response
   * @return {Function}                           - the json response
   */
  router.get('/logout/success', (req, res) => {
    return Handles.SUCCESS(res, 'Logout Successful');
  });

  return router;
};
