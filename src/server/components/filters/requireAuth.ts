'use strict';

/*=============================================>>>>>
= TYPINGS =
===============================================>>>>>*/

import * as express from 'express';
// TODO: import sequelize

/*= End of TYPINGS =*/
/*=============================================<<<<<*/

/*===============================
=            MODULES            =
===============================*/

import ResponseHandler = require('../handles');
// TODO: import sequelize models

/*=====  End of MODULES  ======*/

// TODO: import sequelize user model
const Handles = new ResponseHandler.Handler();

/*==============================
=            MODULE            =
==============================*/

/**
 * Middleware filter to verify an active user is provided
 * @param  {Object}   req  HTTP request
 * @param  {Object}   res  HTTP response
 * @param  {Function} next filter chain
 * @return {Object}        the json response
 */
export = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const token = req.user || req.headers['authorization'];

  // TODO: verify the auth_token exists
  // User.where('token', token).fetch().then((user: bookshelf.Model) => {
  //   // Check for user is null
  //   return user ? next() : Handles.UNAUTHORIZED(res, 'Access Token is Invalid', null);
  // }).catch(() => {
  //   // Token is Invalid
  //   return Handles.UNAUTHORIZED(res, 'Access Token is Invalid', null);
  // });
};

/*=====  End of MODULE  ======*/
