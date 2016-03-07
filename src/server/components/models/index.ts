'use strict';

/*===============================
=            MODULES            =
===============================*/

import * as express from 'express';
import * as sequelize from 'sequelize';
import * as types from './definitions/types.d';

import Sequelize = require('../../config/database');
import Users     = require('./users');

/*=====  End of MODULES  ======*/

module db {
  export class Models {
    Sequelize:     sequelize.Sequelize;
    Users:          sequelize.Model<types.UserInstance, types.UserPojo>;

    constructor() {
      this.Sequelize = Sequelize;
      this.Users =     Users(Sequelize);
    }
  }
}

export = db;

/*----------  OBJECT RELATIONAL MODELS  ----------*/
