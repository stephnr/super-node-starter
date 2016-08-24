'use strict';

/*=============================================>>>>>
= ROUTERS =
===============================================>>>>>*/

import {
  UserRouter
} from '../routes';

/*= End of ROUTERS =*/
/*=============================================<<<<<*/

exports.Routes = app => {
  const userRoutes = UserRouter(app);

  app.use('/users', userRoutes);
};
