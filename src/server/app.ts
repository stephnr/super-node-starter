/// <reference path="../../typings/main.d.ts"/>

/*===============================
=            MODULES            =
===============================*/

import * as express from 'express';
import middleware from './config/middleware';
import routes from './config/routes';
const app = express();

/*=====  End of MODULES  ======*/

/*----------  BUILDING EXPRESS APP COMPONENTS  ----------*/
middleware(app);
routes(app);
/*----------- END BUILDING EXPRESS APP COMPONENTS -----------*/

export default app;
