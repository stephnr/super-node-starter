'use strict';

/*===============================
=            MODULES            =
===============================*/

import _ from 'lodash';
import Sequelize from 'sequelize';
import SEQUELIZE_CFG from '../../../config/config';

/*=====  End of MODULES  ======*/

/*----------  BUILD DATABASE CONNECTION  ----------*/
const sequelize = new Sequelize(
  SEQUELIZE_CFG.database,
  SEQUELIZE_CFG.username,
  SEQUELIZE_CFG.password,
  _.omit(SEQUELIZE_CFG, [ 'database', 'username', 'password' ])
);

exports.database = sequelize;
