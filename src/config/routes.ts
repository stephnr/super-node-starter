// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import {
  RootRouter,
} from '../routes';

// ────────────────────────────────────────────────────────────────────────────────

export const routes = (app: any) => {
  const rootRoutes = RootRouter(app);

  app.use('/', rootRoutes);
};
