'use strict';

/*===============================
=            MODULES            =
===============================*/

const http = require('http');
const app = require('./app');

/*=====  End of MODULES  ======*/

/*----------  BUILDING WEB SERVER  ----------*/
const appServer = http.createServer(app);
const config = app.locals.config;
const log = global.logger;
const port = process.env.PORT || app.locals.config.server.port;

/*----------  EXECUTE SERVER  ----------*/
appServer.listen(port, () => {
  log.info(`Web Server Environment: ${app.locals.config.server.env}`);
  log.info(`Web server listening on port ${config.server.port}`);
  log.info('Web server started');
});
