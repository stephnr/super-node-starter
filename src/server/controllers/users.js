'use strict';

import BaseController from './base';
import Handles from '../components/services/handles';
import log from '../config/logging';
import uuid from 'node-uuid';

import * as Security from '../components/services/security';

import Models from '../components/models';

/** User Router Controller */
class UserController extends BaseController {
  /** Initializes the User Route Controller */
  constructor() {
    super();

    this.Users = Models.Users;
  }

  /**
   * Registers a new user profile
   * @param  {Object} req   the express request
   * @param  {Object} res   the express response
   */
  signup(req, res) {
    // Save the salt used to encrypt the password
    req.body.salt = process.env.BCRYPT_SALT;
    // Encrypt password before saving
    req.body.password = Security.encrypt(req.body.password, req.body.salt);
    // Add an api token
    req.body.token = uuid.v4();

    // Create new record
    this.Users.create(req.body).then(user => {
      log.debug(`New User created: ${user.get('email')}`);
      return Handles.CREATED(res, 'Successfully created new User', user);
    }).catch(err => {
      this.reportError(err);
      return Handles.BAD_REQUEST(res, 'Failed to create new User', err);
    });
  }

  /**
   * Retrieves the user profile of the logged in account
   * @param  {Object} req   the express request
   * @param  {Object} res   the express response
   */
  getUser(req, res) {
    return Handles.SUCCESS(res, 'Found User', req.user);
  }

}

exports.UserController = UserController;
