'use strict';

/*=============================================>>>>>
= TYPINGS =
===============================================>>>>>*/

import Handles from '../services/handles';

import graphqlHTTP from 'express-graphql';

import APIScheme from '../graphs';

/*= End of TYPINGS =*/
/*=============================================<<<<<*/

/**
 * Root API Router
 * @return {Object}    - the express router
 */
exports.RootRouter = function() {
  const router = require('express').Router();

  /**
   * Graph Page
   * @param  {String} '/' - url route
   * @param  {Function}   - GraphQL HTTP Handler
   * @return {String}     - json response
   */
  router.use('/', graphqlHTTP(req => ({
    schema:     APIScheme,
    rootValue:  { session: req.session, user: req.user },
    graphiql:   (process.env.NODE_ENV === 'development')
  })));

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
