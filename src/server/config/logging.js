'use strict';

/*===============================
=            MODULES            =
===============================*/

import winston from 'winston';

/*=====  End of MODULES  ======*/

const Logger = new (winston.Logger)({
  level:      process.env.LOGGING_LEVEL,
  transports: [
    new (winston.transports.Console)()
  ]
});

export default Logger;
