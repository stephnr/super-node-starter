'use strict';

/*=============================================>>>>>
= ROUTERS =
===============================================>>>>>*/

import {
  RootRouter,
  AuthRouter
} from '../routes';

/*= End of ROUTERS =*/
/*=============================================<<<<<*/

exports.Routes = app => {
  const rootRoutes = RootRouter(app);
  const authRoutes = AuthRouter(app);

  app.use('/', rootRoutes);
  app.use('/auth', authRoutes);
};
