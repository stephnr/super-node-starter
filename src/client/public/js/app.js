(function() {
  'use strict';

  require('./app.globals');

  /*===================================
  =            STYLESHEETS            =
  ===================================*/

  require('../scss/main.scss');

  /*=====  End of STYLESHEETS  ======*/

  angular.module('app', [
    'ngAnimate',
    'ngAria',
    'ngMaterial',
    'ngMessages',
    'LocalStorageModule',
    require('angular-resource'),
    require('angular-ui-router')
  ]);

  /*==========================================
  =            ADDITIONAL MODULES            =
  ==========================================*/

  /*----------- HOME -----------*/
  require('./home/home.controller');

  /*----------  CORE  ----------*/

  // Inits/Run App
  require('./app.constants');
  require('./app.config');
  require('./app.routes');
  require('./app.run');

  /*=====  End of ADDITIONAL MODULES  ======*/


})();
