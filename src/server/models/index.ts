'use strict';

/*===============================
=            MODULES            =
===============================*/

import * as Sequelize from 'sequelize';

/*==============================
=            MODELS            =
==============================*/

import {
  UserInstance,
  UserPojo
} from './types.d';

import { Users } from './users';

/*=====  End of MODELS  ======*/

import { database } from '../config';

/*=====  End of MODULES  ======*/

/** Sequelize Models Manager */
class Models {
  Sequelize: Sequelize.Sequelize;
  Users: Sequelize.Model<UserInstance, UserPojo>;

  /** Creates a new class object containing db models */
  constructor() {
    this.Sequelize = database;
    this.Users = Users(this.Sequelize);
  }
}

/*----------  OBJECT RELATIONAL MODELS  ----------*/

const modelsInstance = new Models();

export default modelsInstance as Models;
