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

const Checkit = require('checkit');
import ResponseHandler = require('../handles');
import logEngine = require('../../config/logging');

/*=====  End of MODULES  ======*/

const log = new logEngine.Logger().instance;
const Handles = new ResponseHandler.Handler();

/**
 * Middleware to validate the request body for specific parameters
 * @param  {Object} reqParams map of params to use with checkit
 * @return {Object}           security chain process
 */
export = (reqParams: Object) => {
  return (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const checkit = new Checkit(reqParams);

    checkit.run(req.body).then(() => {
      // Required params exist
      return next();
    }).catch(Checkit.Error, (err: any) => {
      // Missing params
      // body contained invalid params
      log.info('-->> body contained invalid params');
      log.info(err.toJSON());
      return Handles.BAD_REQUEST(res, 'Insufficient Params', err.toJSON());
    });
  };
};
