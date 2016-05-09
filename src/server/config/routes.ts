'use strict';

/*=============================================>>>>>
= MODULES =
===============================================>>>>>*/

import * as express from 'express';

import root from '../routes/root';
import user from '../routes/users';

/*= End of MODULES =*/
/*=============================================<<<<<*/

/**
 * Main Router Controller to build routes
 * @namespace Routes
 * @param  {Object} app express application object
 */
export default function Routes(app: express.Express) {
  /*----------  ROUTERS  ----------*/
  const rootRoutes = root(app);
  const userRoutes = user(app);

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
