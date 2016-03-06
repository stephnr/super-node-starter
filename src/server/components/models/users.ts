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

  const tablename = 'users';

  const User = <sequelize.Model<types.UserInstance, types.UserPojo>> sequelize.define(tablename, {
    id: {
      type: Sequelize.BIGINT,
      autoIncrement: true,
      primaryKey: true
    },
    email: {
      type:  Sequelize.STRING,
      field: 'email',
      allowNull: false,
      unique: true
    },
    password: {
      type:  Sequelize.STRING,
      field: 'password',
      allowNull: false
    },
    token: {
      type: Sequelize.UUID,
      allowNull: false,
      unique: true
    },
    first_name: {
      type:  Sequelize.STRING,
      field: 'firstName'
    },
    last_name: {
      type:  Sequelize.STRING,
      field: 'lastName'
    }
  }, {
    timestamps: true
  });

  return User;
}
