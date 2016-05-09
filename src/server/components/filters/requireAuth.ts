'use strict';

/*===============================
=            MODULES            =
===============================*/

import * as express from 'express';
import Handles from '../services/handles';
import log from '../../config/logging';

/*=====  End of MODULES  ======*/

import db from '../models';

/*=============================================>>>>>
= IMPORT DATABASE TABLES ORM =
===============================================>>>>>*/

const Models = new db();
const Users = Models.Users;

/*= End of IMPORT DATABASE TABLES ORM =*/
/*=============================================<<<<<*/

/*==============================
=            MODULE            =
==============================*/

/**
 * Middleware filter to verify an active user is provided
 * @param  {Object}   req  HTTP request
 * @param  {Object}   res  HTTP response
 * @param  {Function} next filter chain
 */
export default function(req: express.Request, res: express.Response, next: express.NextFunction) {
  const token = req.user || req.headers['authorization'];

  Users.findOne({
    where: { token: token }
  }).then(user => {
    // Check for user is null
    return user ? next() : Handles.UNAUTHORIZED(res, 'Access Token is Invalid', null);
  }).catch(() => {
    // Token is Invalid
    return Handles.UNAUTHORIZED(res, 'Access Token is Invalid', null);
  });
};

/*=====  End of MODULE  ======*/
