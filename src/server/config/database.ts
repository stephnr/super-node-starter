'use strict';

/*===============================
=            MODULES            =
===============================*/

import * as Sequelize from 'sequelize';
const SEQUELIZE_CFG = require('../../../config/config');

/*=====  End of MODULES  ======*

/*----------  BUILD DATABASE CONNECTION  ----------*/
const sequelize = new Sequelize(SEQUELIZE_CFG.database, SEQUELIZE_CFG.username, SEQUELIZE_CFG.password, {
  host:    SEQUELIZE_CFG.host,
  dialect: process.env.DATABASE_ENGINE,
  pool: {
    maxConnections:  process.env.DATABASE_POOL_MAX,
    minConnections:  process.env.DATABASE_POOL_MIN,
    maxIdleTime: process.env.DATABASE_POOL_IDLE
  }
});

export default sequelize;
