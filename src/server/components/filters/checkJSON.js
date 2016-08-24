'use strict';

/*===============================
=            MODULES            =
===============================*/

import Checkit from 'checkit';
import Handles from '../services/handles';
import { log } from '../../config';

/*=====  End of MODULES  ======*/

/**
* Middleware to validate the request body for specific parameters
* @param  {Object} reqParams - map of params to use with checkit
* @return {Object}           - security chain process
*/
exports.checkJSON = function(reqParams) {
  return (req, res, next) => {
    const checkit = new Checkit(reqParams);

    checkit.run(req.body)
    .then(() => { return next(); })
    .catch(Checkit.Error, err => {
      // Missing params: body contained invalid params
      log.info('-->> body contained invalid params');
      log.info(err.toJSON());
      return Handles.BAD_REQUEST(res, 'Insufficient Params', err.toJSON());
    });
  };
};
