'use strict';

/*=============================================>>>>>
= ROUTERS =
===============================================>>>>>*/

import {
  RootRouter,
  GraphRouter,
  UserRouter
} from '../routes';

/*= End of ROUTERS =*/
/*=============================================<<<<<*/

exports.Routes = app => {
  const rootRoutes = RootRouter(app);
  const graphRoutes = GraphRouter(app);
  const userRoutes = UserRouter(app);

  app.use('/', rootRoutes);
  app.use('/graphs', graphRoutes);
  app.use('/users', userRoutes);
};
