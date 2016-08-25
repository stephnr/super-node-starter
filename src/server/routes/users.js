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
 * User API Router
 * @param {Object} app - the express application
 * @return {Object}    - the express router
 */
exports.UserRouter = function(app) {
  /**
   * User Router
   * @param  {String} app    - express application object
   * @return {Object} router - routing object for Root Router
   */
  const router = require('express').Router();

  /**
   * User Graph Page
   * @param  {String} '/' - url route
   * @param  {Function}   - GraphQL HTTP Handler
   * @return {String}     - json response
   */
  router.use('/', graphqlHTTP(req => ({
    schema:     UserSchema,
    rootValue:  { session: req.session, user: req.user },
    graphiql:   (process.env.NODE_ENV === 'development')
  })));

  return router;
};
