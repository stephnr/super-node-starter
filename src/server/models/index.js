'use strict';

/*===============================
=            MODULES            =
===============================*/

/*==============================
=            MODELS            =
==============================*/

import { Users } from './users';

/*=====  End of MODELS  ======*/

import { database } from '../config';

/*=====  End of MODULES  ======*/

/** Sequelize Models Manager */
class Models {
  /** Creates a new class object containing db models */
  constructor() {
    this.Sequelize = database;

    this.Users = Users(this.Sequelize);
  }
}

/*----------  OBJECT RELATIONAL MODELS  ----------*/

module.exports = (new Models());
