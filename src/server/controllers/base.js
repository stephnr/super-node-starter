'use strict';

import log from '../config/logging';

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
