/// <reference path="../../typings/main.d.ts"/>

/*===============================
=            MODULES            =
===============================*/

import express = require('express');
const app = express();

/*=====  End of MODULES  ======*/


/*----------  BUILDING EXPRESS APP COMPONENTS  ----------*/
require('./config/logging');
require('./config/environment');
require('./config/middleware')(app);
require('./config/routes')(app);

export = app;
