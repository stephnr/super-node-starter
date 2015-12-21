'use strict';

/*===============================
=            MODULES            =
===============================*/

// Load Knex globally
const pool = require('../../../knexfile');
const knex = require('knex')(pool[ process.env.NODE_ENV ]);

/*=====  End of MODULES  ======*/


module.exports = app => {
  const Tables = { knex: knex };
  const common = require('./common')();

  /* Import Table Specific Modules */
  // Tables.Users = require('./users')(knex, common);

  return Tables;
};
