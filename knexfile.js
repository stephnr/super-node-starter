'use strict';

/*===============================
=            MODULES            =
===============================*/

const _ = require('lodash');
const express = require('express');
const app = express();
const config = require('./server/config/environment')(app);

/*=====  End of MODULES  ======*/


const base = {
  client:     config.database.engine,
  connection: config.database.connection,
  migrations: {
    tableName: 'migrations'
  },
  pool: {
    min: config.database.poolMin,
    max: config.database.poolMax
  }
};

const production = {
  debug: false,
};

const knexPool = {
  development: base,
  staging:     base,
  production:  _.extend({}, base, production)
};

module.exports = knexPool;
