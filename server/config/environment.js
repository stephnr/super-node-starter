'use strict';

/*===============================
=            MODULES            =
===============================*/

const _ = require('lodash');

/*=====  End of MODULES  ======*/


module.exports = function(app) {
  // Fetches the environment configurations
  const config = _.extend(
    require('./environments/defaults'),
    require(`./environments/${process.env.NODE_ENV}`)
  );

  // Exposes the environment configurations to the local app
  app.locals.config = config;

  return config;
};
