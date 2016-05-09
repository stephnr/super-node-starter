/* eslint no-magic-numbers:0 */

'use strict';

/*=============================================>>>>>
= SEQUELIZE MIGRATIONS CONFIGURATIONS =
===============================================>>>>>*/

require('dotenv').config();

const DB_URL = process.env.DATABASE_URL || '';

try {
  
  // Parse the Heroku type database URL to retrieve the vars
  const CREDENTIALS = DB_URL.split('/')[ 2 ].split('@').shift().split(':');
  const DATABASE = DB_URL.split('/').pop();
  const HOST = DB_URL.split('/')[ 2 ].split('@').pop().split(':').shift();
  const ENGINE = process.env.DATABASE_ENGINE;

  module.exports = {
    username: CREDENTIALS[ 0 ],
    password: CREDENTIALS[ 1 ],
    database: DATABASE,
    host:     HOST,
    dialect:  ENGINE
  };

} catch(e) {
  throw new Error('Failed to parse DATABASE_URL from env');
}

/*= End of SEQUELIZE MIGRATIONS CONFIGURATIONS =*/
/*=============================================<<<<<*/
