'use strict';

/*=============================================>>>>>
= TYPINGS =
===============================================>>>>>*/

declare var global: { config: { server: { env: string; port: string; }; }; log: Object; };
declare var process: any;

/*= End of TYPINGS =*/
/*=============================================<<<<<*/

/*===============================
=            MODULES            =
===============================*/

require('dotenv').config();
import http = require('http');
import app = require('./app');
import config = require('./config/environment');
import logEngine = require('./config/logging');

/*=====  End of MODULES  ======*/

const log = new logEngine.Logger().instance;

/*----------  BUILDING WEB SERVER  ----------*/
var appServer = http.createServer(app);
var port = process.env.PORT || global.config.server.port;

/*----------  EXECUTE SERVER  ----------*/
appServer.listen(port, () => {
  log.info(`Web Server Environment: ${config.server.env}`);
  log.info(`Web server listening on port ${config.server.port}`);
  log.info('Web server started');
});
