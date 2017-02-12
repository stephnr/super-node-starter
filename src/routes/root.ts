// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import * as express from 'express';

import {Router} from 'express';
import {Handles} from '../services';

// ────────────────────────────────────────────────────────────────────────────────

/**
 * Root API Router
 * @return {Router} - the express router
 */
export function RootRouter(app: Express.Response) {
  const router = Router();

  /**
   * Home Route
   * @param  {string} '/' - url path
   * @param  {express.Request} (req, res) - callback to execute with the HTTP request and response
   * @return {express.Response} - the json response
   */
  router.get('/', (req: express.Request, res: express.Response) => {
    return Handles.SUCCESS(res, 'Hello World');
  });

  return router;
};
