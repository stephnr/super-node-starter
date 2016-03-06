'use strict';

/*===============================
=            MODULES            =
===============================*/

import * as express from 'express';
import * as sequelize from 'sequelize';
import * as types from './definitions/types.d';

const Sequelize = require('sequelize');
const checkit = require('checkit');
const rules = require('./rules');

import logEngine = require('../../config/logging');

/*=====  End of MODULES  ======*/

const log = new logEngine.Logger().instance;

export = function(sequelize: sequelize.Sequelize) {

  const tablename = 'USERS';

  const User = <sequelize.Model<types.UserInstance, types.UserPojo>> sequelize.define(tablename, {
    email: {
      type:  Sequelize.STRING,
      field: 'email'
    },
    password: {
      type:  Sequelize.STRING,
      field: 'password'
    },
    firstName: {
      type:  Sequelize.STRING,
      field: 'first_name'
    },
    lastName: {
      type:  Sequelize.STRING,
      field: 'last_name'
    },
  });

  return User;
}
