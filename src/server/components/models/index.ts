'use strict';

/*===============================
=            MODULES            =
===============================*/

import * as express from 'express';
import * as sequelize from 'sequelize';
import * as types from './definitions/types.d';

import Sequelize  from '../../config/database';
import Users      from './users';

/*=====  End of MODULES  ======*/

export default class Models {
  public Sequelize: sequelize.Connection;
  public Users:     sequelize.Model<types.UserInstance, types.UserPojo>;

  constructor() {
    this.Sequelize = Sequelize;
    this.Users =     Users(this.Sequelize);
  }
}

/*----------  OBJECT RELATIONAL MODELS  ----------*/
