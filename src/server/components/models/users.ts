'use strict';

/*===============================
=            MODULES            =
===============================*/

const checkit = require('checkit');
import * as express from 'express';
import * as Sequelize from 'sequelize';
import * as types from './definitions/types.d';
import rules from './rules';

import log from '../../config/logging';

/*=====  End of MODULES  ======*/

export default function(sequelize: any) {

  const tablename = 'users';

  const User = <Sequelize.Model<types.UserInstance, types.UserPojo>> sequelize.define(tablename, {
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
    firstName: {
      type:  Sequelize.STRING,
      field: 'firstName'
    },
    lastName: {
      type:  Sequelize.STRING,
      field: 'lastName'
    }
  }, {
    timestamps: true
  });

  return User;
}
