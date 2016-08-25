'use strict';

/*===============================
=            MODULES            =
===============================*/

import Models from '../models';
import Handles from '../services/handles';

/*=====  End of MODULES  ======*/

/*=============================================>>>>>
= IMPORT DATABASE TABLES ORM =
===============================================>>>>>*/

const Users = Models.Users;

/*= End of IMPORT DATABASE TABLES ORM =*/
/*=============================================<<<<<*/

/*==============================
=            MODULE            =
==============================*/

/**
 * Middleware filter to verify an active user is provided
 * @param  {Object}   req  - HTTP request
 * @param  {Object}   res  - HTTP response
 * @param  {Function} next - filter chain
 * @return {Object}        - the response object
 */
exports.requireAuth = (req, res, next) => {
  req.user = req.user || {};
  const token = req.user.token;
  const authToken = req.headers.authorization;

  if(req.user.id) {
    return next();
  } else {
    // Fetch the user info
    Users.findOne({
      where: { token: (authToken || token) }
    }).then(user => {
      if(user) {
        // Inject the user into the request
        req.user = user.toJSON();
        return next();
      } else {
        return Handles.TOKEN_EXPIRED(res, 'No user found', null);
      }
    }).catch(() => {
      // Token is Invalid
      return Handles.TOKEN_EXPIRED(res, 'Access Token is Invalid', null);
    });
  }
};

/*=====  End of MODULE  ======*/
