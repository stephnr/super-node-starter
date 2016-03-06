'use strict';

/*=============================================>>>>>
= TYPINGS =
===============================================>>>>>*/

import * as express from 'express';
import * as sequelize from 'sequelize';

/*= End of TYPINGS =*/
/*=============================================<<<<<*/

/*===============================
=            MODULES            =
===============================*/

import _ = require('lodash');
import logEngine = require('../config/logging');
import moment = require('moment');
import passport = require('passport');
import uuid = require('node-uuid');

/*----------  FILTERS  ----------*/
import requireAuth = require('../components/filters/requireAuth');
import checkJSON = require('../components/filters/checkJSON');
import rules = require('../components/models/rules');

/*----------  SERVICES  ----------*/
import Security = require('../components/services/security');
import ResponseHandler = require('../components/handles');
import db = require('../components/models');

/*----------  MODELS  ----------*/
// TODO: import sequelize models

/*=====  End of MODULES  ======*/

/* Configure Logging */
const log = new logEngine.Logger().instance;

/* Configure Response Handler */
const Handles = new ResponseHandler.Handler();

/* Configure Models */
const Models = new db.Models();

/*=============================================>>>>>
= DB MODELS =
===============================================>>>>>*/

const Users = Models.Users;

/*= End of DB MODELS =*/
/*=============================================<<<<<*/

/**
 * Collection of REST endpoints for managing Users
 * @return {Object} Express Router
 */
export = () => {
  /*----------  BEGIN ROUTES  ----------*/
  const router = require('express').Router();

  /*================================
  =            GET USER            =
  ================================*/

  /**
   * Gets User from the Active Passport Session
   * @param {String}   '/' url path
   * @param {Function}     callback to execute with HTTP Request and Response
   */
  router.get('/user/token', (req: express.Request, res: express.Response) => {
    return res.json({
      token: req.user
    });
  });

  /*=====  End of GET USER  ======*/


  /*====================================
  =            SIGNUP/LOGIN            =
  ====================================*/

  /**
   * Register a new user
   * @param  {String} '/signup'               url path
   * @param  {Function} checkJSON(Rules.User) verifies the JSON in the request body
   * @param  {Function} (req, res)            callback to execute with the HTTP request and response
   * @return {Object}                         the json response
   */
  router.post('/signup', checkJSON(rules.UserSignup), (req: express.Request, res: express.Response) => {
    // Encrypt password before saving
    req.body.password = Security.encrypt(req.body.password);
    // Add an api token
    req.body.token = uuid.v4();

    log.debug(`Preparing new user with API Token: ${req.body.token}`);
    // Create new record
    Users.create(req.body).then(user => {
      return Handles.CREATED(res, 'Successfully created new User', _.omit(user.toJSON(), ['password', 'id', 'updated_at', 'created_at']));
    }).catch((err: sequelize.BaseError) => {
      log.debug(err.message);
      log.debug(err.stack);
      return Handles.BAD_REQUEST(res, 'Failed to create new User', err.message);
    });
  });

  /**
   * Verifies the users login using the Passport-Local Strategy
   * @param  {String} '/login'                            url path
   * @param  {Function} ensureValidJSON(Users.loginCreds) verifies the JSON in the request body
   * @param  {Function} passport.authenticate('local')    verifies the JSON contains a valid login
   * @param  {Function} (req, res)                        callback to execute with the HTTP request and response
   * @return {Function}                                   the json response
   */
  router.post('/login', checkJSON(rules.UserLogin), passport.authenticate('local'), (req: express.Request, res: express.Response) => {
    log.debug(`Login Successful for User: ${req.user}`);
    return Handles.SUCCESS(res, 'Login Successful', req.user);
  });

  /**
   * Destroys the users session stored with Passport-Local Strategy
   * @param  {String} '/logout'    url path
   * @param  {Function} (req, res) callback to execute with the HTTP request and response
   * @return {Function}            the json response
   */
  router.get('/logout', (req: express.Request, res: express.Response) => {
    log.debug(`Logging out for User: ${req.user}`);
    req.logout();
    res.redirect('/');
  });

  /*=============================
  =            USER            =
  =============================*/

  /**
   * Returns the User Object
   * @param  {String} '/user'     url path
   * @param  {Function} requireAuth verifies the user
   * @param  {Function} (req, res)  the callback to execute with the HTTP request and response
   * @return {Object}               the json response
   */
  router.get('/user', requireAuth, (req: express.Request, res: express.Response) => {
    const token = req.user || req.headers['authorization'];

    // TODO: Sequelize fetch user details
    // User.where('token', token).fetch().then((user: bookshelf.Model) => {
    //   if (req.user !== null) {
    //     // Found user
    //     return Handles.SUCCESS(res, 'Found User', _.omit(user.toJSON(), ['password', 'id', 'updated_at', 'created_at']));
    //   } else {
    //     // No user exists
    //     return Handles.BAD_REQUEST(res, 'No user found', null);
    //   }
    // });
  });

  /**
   * Updates the user
   * @param  {String} '/user'                                url path
   * @param  {Function} requireAuth                          verifies the user
   * @param  {Function} ensureValidJSON(Users.updateColumns) verifies the JSON content of the request body
   * @param  {Function} (req, res)                           the callback to execute with the HTTP request and response
   * @return {Object}                                        the json response
   */
  router.put('/user', requireAuth, checkJSON(rules.UserUpdate), (req: express.Request, res: express.Response) => {
    if (req.body.password) {
      return Handles.BAD_REQUEST(res, 'Password Field is not updateable. Please use the /update-password endpoint', null);
    } else {
      // TODO: Sequelize Update User
      // User.where('token', req.headers['authorization']).fetch().then((user: bookshelf.Model) => {
      //   // Update user (except for password)
      //   user = user.set(_.omit(req.body, 'password')).save();
      //   return Handles.SUCCESS(res, 'Update Successful');
      // }).catch((err: any) => {
      //   // Error
      //   return Handles.SERVER_ERROR(res, 'Failed to update user', err.message);
      // });
    }
  });

  /**
   * Sends an email to the connected user account for resetting the password
   * @param  {String} '/user/reset-password'         url path
   * @param  {Function} ensureValidJSON([ 'email' ]) verifies the JSON content of the request body
   * @param  {Function} (req, res)                   the callback to execute with the HTTP request and response
   * @return {Object}                                the json response
   */
  router.post('/user/reset-password', checkJSON({ email: 'required' }), (req: express.Request, res: express.Response) => {
    // TODO: Sequelize update the users password via reset
    // User.where('email', req.body.email).fetch().then((user: bookshelf.Model) => {
    //   const resetToken = uuid.v4();

    //   if (user) {
    //     // Update the `updated_at` timestamp
    //     user = user.set('updated_at', Common.getTimestamp()).save().then((updatedUser: bookshelf.Model) => {
    //       // Update/set the new record in PW Reset model
    //       PasswordReset.where('user_id', updatedUser.toJSON().id).fetch().then((user: bookshelf.Model) => {
    //         if (user !== null) {
    //           // Update existing user
    //           user.set({
    //             'token': resetToken
    //           }).save();
    //         } else {
    //           // Create new user
    //           PasswordReset.forge({
    //             'user_id': updatedUser.toJSON().id,
    //             'token': resetToken
    //           }).save();
    //         }
    //       });

    //       // Notify the user of the change
    //       const resetURL = `http://${process.env.WEB_HOST}?token=${resetToken}`;

    //       return Mail.sendPasswordResetEmail(res, updatedUser.toJSON(), resetURL);
    //     });
    //   } else {
    //     return Handles.NOT_FOUND(res, 'No User Found with email');
    //   }
    // });
  });

  /**
   * Provides the users details with a valid token. Nothing is passed if the token has expired
   * @param  {String}   '/user/reset-password/:token' url path
   * @param  {Function} (req, res)                    the callback to execute with the HTTP request and response
   * @return {Object}                                 the json response
   */
  router.get('/user/reset-password/:token', (req: express.Request, res: express.Response) => {
    // TODO: Sequelize reset password callback via email with token in url
    // PasswordReset.where('token', req.params.token).fetch().then((pwr: bookshelf.Model) => {
    //   if (pwr) {
    //     // Fetch the user
    //     User.where('id', pwr.get('user_id')).fetch().then((user: bookshelf.Model) => {
    //       const mins = moment.duration(moment().diff(user.get('updated_at'))).asMinutes();

    //       // If within the time threshold
    //       if (mins < process.env.PASSWORD_RESET_THRESHOLD) {
    //         // Update the user accounts token and pass it down
    //         new PasswordReset('id', pwr.get('id')).destroy().then(() => {
    //           // Fetch user again to get updated token
    //           return Handles.SUCCESS(res, 'Reset Password successful', { email: user.get('email'), token: user.get('token') });
    //         });
    //       } else {
    //         return Handles.BAD_REQUEST(res, 'Token expired');
    //       }
    //     });
    //   } else {
    //     return Handles.NOT_FOUND(res, 'No User exists');
    //   }
    // });
  });

  /**
   * Updates the users password
   * @param  {String} '/user/update-password'           url path
   * @param  {Function} requireAuth                     verifies the user
   * @param  {Function} ensureValidJSON([ 'password' ]) verifies the JSON content of the request body
   * @param  {Function} (req, res)                      the callback to execute with the HTTP request and response
   * @return {Object}                                   the json response
   */
  router.post('/user/update-password', requireAuth, checkJSON({ password: 'required' }), (req: express.Request, res: express.Response) => {
    // TODO: Find the users detail and update the password via Sequelize
    // if (req.body.password.length > 0) {
    //   // Update the user
    //   User.where('token', req.headers['authorization']).fetch().then((user: bookshelf.Model) => {
    //     user.set('password', Security.encrypt(req.body.password)).save();
    //     return Handles.SUCCESS(res, 'Updated Password Successfully');
    //   });
    // } else {
    //   return Handles.BAD_REQUEST(res, 'New Password is empty');
    // }
  });

  /*----------  END ROUTES  ----------*/


  return router;
};
