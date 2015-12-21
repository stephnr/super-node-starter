'use strict';

/**
 * Main Router Controller to build routes
 * @namespace Routes
 * @param  {Object} app express application object
 */
module.exports = app => {
  /*----------  ROUTERS  ----------*/
  const rootRoutes = require('../routes/root')(app);

  /*----------  MAP ROUTES TO PARENT URLS  ----------*/
  app.use('/', rootRoutes);
};
