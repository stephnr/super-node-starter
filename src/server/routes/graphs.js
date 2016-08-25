'use strict';

/*=============================================>>>>>
= MODULES =
===============================================>>>>>*/

import graphqlHTTP from 'express-graphql';

import {
  UserSchema
} from '../graphs/schemas';

/*= End of MODULES =*/
/*=============================================<<<<<*/

/**
 * Root API Router
 * @param {Object} app - the express application
 * @return {Object}    - the express router
 */
exports.GraphRouter = function(app) {
  /**
   * Graph Router
   * @param  {String} app    - express application object
   * @return {Object} router - routing object for Root Router
   */
  const router = require('express').Router();

  /**
   * User GraphiQL Page
   * @param  {String} '/users' - url route
   * @param  {Function}        - (req, res) contains the request and response of the URL
   * @return {String}          - json response
   */
  router.use('/users', graphqlHTTP({
    schema:   UserSchema,
    graphiql: (process.env.NODE_ENV === 'development')
  }));

  return router;
};
