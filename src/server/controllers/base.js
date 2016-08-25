'use strict';

/*===============================
=            MODULES            =
===============================*/

import log from '../config/logging';

/*=====  End of MODULES  ======*/


/** The Base API Controller */
class BaseController {

  /**
   * Logs an error
   * @param  {Object} err - the error object
   */
  reportError(err) {
    log.debug(err);
  }
}

export default BaseController;
