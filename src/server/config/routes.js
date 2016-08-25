'use strict';

/*=============================================>>>>>
= ROUTERS =
===============================================>>>>>*/

import {
  RootRouter,
  AuthRouter,
  UserRouter
} from '../routes';

/*= End of ROUTERS =*/
/*=============================================<<<<<*/

exports.Routes = app => {
  const rootRoutes = RootRouter(app);
  const authRoutes = AuthRouter(app);
  const userRoutes = UserRouter(app);

  app.use('/', rootRoutes);
  app.use('/auth', authRoutes);
  app.use('/users', userRoutes);
};
