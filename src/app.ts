// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import * as express from 'express';

import {
  middleware,
  routes
} from './config';

const app = express();

/*----------  BUILDING EXPRESS APP COMPONENTS  ----------*/
middleware(app);
routes(app);
/*----------- END BUILDING EXPRESS APP COMPONENTS -----------*/

export { app };
