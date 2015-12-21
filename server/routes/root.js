'use strict';

/*===============================
=            MODULES            =
===============================*/

const log = global.logger;

/*=====  End of MODULES  ======*/

module.exports = app => {
  /**
   * Root Router
   * @name Root Controller
   * @memberof Routes
   * @param  {String} app    express application object
   * @return {Object} router routing object for Root Router
   */
  const router = require('express').Router();

  /**
   * Sample Hello World route
   * @function
   * @param  {String} '/'   url route
   * @param  {Function}     (req, res) contains the request and response of the URL
   * @return {String}       json response
   */
  router.get('/', (req, res) => {
    log.info('Visited Root Route!');
    res.json('Hello World!');
  });

  return router;
};
