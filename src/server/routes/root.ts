'use strict';

/*=============================================>>>>>
= TYPINGS =
===============================================>>>>>*/

import * as express from 'express';

/*= End of TYPINGS =*/
/*=============================================<<<<<*/

/*===============================
=            MODULES            =
===============================*/

import log from '../config/logging';

/*=====  End of MODULES  ======*/

export default function RootRoutes(app: express.Express) {
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
  router.get('/', (req: express.Request, res: express.Response) => {
    log.debug('--->>> visited client webapp');
    res.send('Hello World');  
  });

  return router;
};
