'use strict';

/*=============================================>>>>>
= TYPINGS =
===============================================>>>>>*/

import * as express from 'express';

/*= End of TYPINGS =*/
/*=============================================<<<<<*/

/**
 * Main Router Controller to build routes
 * @namespace Routes
 * @param  {Object} app express application object
 */
export = (app: express.Express) => {
  /*----------  ROUTERS  ----------*/
  const rootRoutes = require('../routes/root')(app);
  const userRoutes = require('../routes/users')(app);

  /*=============================================>>>>>
  = ROUTES =
  ===============================================>>>>>*/

  /*----------- PUBLIC ENDPOINTS -----------*/

  app.use('/', rootRoutes);

  /*----------- API STANDARD/MIXED AUTH REQUIRED -----------*/

  app.use('/api/users', userRoutes);

  /*= End of ROUTES =*/
  /*=============================================<<<<<*/
}
