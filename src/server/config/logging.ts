'use strict';

/*===============================
=            MODULES            =
===============================*/

import * as winston from 'winston';

/*=====  End of MODULES  ======*/

const log = new (winston.Logger)({
  level:      process.env.LOGGING_LEVEL,
  transports: [
    new (winston.transports.Console)()
  ]
});

export { log };
