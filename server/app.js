'use strict';

/*===============================
=            MODULES            =
===============================*/

const express = require('express');
const app = express();

/*=====  End of MODULES  ======*/


/*----------  BUILDING EXPRESS APP  ----------*/
require('./config/environment')(app);
require('./config/logging')(app);
require('./config/middleware')(app);
require('./config/express')(app);
require('./config/routes')(app);

module.exports = app;
