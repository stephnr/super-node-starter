'use strict';

/*===============================
=            MODULES            =
===============================*/

import * as _ from 'lodash';
import * as Sequelize from 'sequelize';
const SEQUELIZE_CFG = require('../../../config/config');

/*=====  End of MODULES  ======*/

/*----------  BUILD DATABASE CONNECTION  ----------*/
const sequelize: Sequelize.Sequelize = new Sequelize(
  SEQUELIZE_CFG.database,
  SEQUELIZE_CFG.username,
  SEQUELIZE_CFG.password,
  _.omit(SEQUELIZE_CFG, [ 'database', 'username', 'password' ])
);

export { sequelize as database };
