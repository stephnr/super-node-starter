'use strict';

/*===============================
=            MODULES            =
===============================*/

import Sequelize = require('sequelize');

/*=====  End of MODULES  ======*

/*----------  BUILD DATABASE CONNECTION  ----------*/
const sequelize = new Sequelize(process.env.DATABASE_ENTITY, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
  host:    process.env.DATABASE_HOST,
  dialect: process.env.DATABASE_ENGINE,
  pool: {
    maxConnections:  process.env.DATABASE_POOL_MAX,
    minConnections:  process.env.DATABASE_POOL_MIN,
    maxIdleTime: process.env.DATABASE_POOL_IDLE
  }
});

export = sequelize;
