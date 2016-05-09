'use strict';

/*===============================
=            MODULES            =
===============================*/

import * as express from 'express';
import handles from '../services/handles';
import log from '../../config/logging';
const Checkit = require('checkit');

/*=====  End of MODULES  ======*/

/**
* Middleware to validate the request body for specific parameters
* @param  {Object} reqParams map of params to use with checkit
* @return {Object}           security chain process
*/
export default function(reqParams: Object) {
  return (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const checkit = new Checkit(reqParams);

    checkit.run(req.body).then(() => {
      // Required params exist
      return next();
    }).catch(Checkit.Error, (err: any) => {
      // Missing params: body contained invalid params
      log.info('-->> body contained invalid params');
      log.info(err.toJSON());
      return handles.BAD_REQUEST(res, 'Insufficient Params', err.toJSON());
    });
  };
}
