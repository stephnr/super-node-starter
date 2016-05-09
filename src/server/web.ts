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

import * as http from 'http';
import app from './app';
import env from './config/environment';
import log from './config/logging';

/*=====  End of MODULES  ======*/

/*----------  BUILDING WEB SERVER  ----------*/
var appServer = http.createServer(app);
var port = process.env.PORT || global.config.server.port;

/*----------  EXECUTE SERVER  ----------*/
appServer.listen(port, () => {
  log.info(`Web Server Environment: ${env.server.env}`);
  log.info(`Web server listening on port ${env.server.port}`);
  log.info('Web server started');
});
