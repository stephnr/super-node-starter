'use strict';

/*=============================================>>>>>
= SEQUELIZE MIGRATIONS CONFIGURATIONS =
===============================================>>>>>*/

require('dotenv').config();

module.exports = {
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_ENTITY,
  host:     process.env.DATABASE_HOST,
  dialect:  process.env.DATABASE_ENGINE
}

/*= End of SEQUELIZE MIGRATIONS CONFIGURATIONS =*/
/*=============================================<<<<<*/
