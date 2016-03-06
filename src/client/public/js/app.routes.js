(function() {
  'use strict';

  angular.module('app')
  .config(AppConfig);

  /* @ngInject */
  /**
   * Configures the Angular Application
   * @param {Object} $stateProvider                ui-router state provider
   * @param {Object} $urlRouterProvider            ui-router url router
   * @param {Object} $locationProvider             ui-router location provider
   * @param {Object} $mdThemingProvider            angular material theme provider
   * @param {Object} localStorageServiceProvider   local storage provider
   */
  function AppConfig($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider, localStorageServiceProvider) {
    /** configures local storage service */
    localStorageServiceProvider
      .setPrefix('SNS')
      .setStorageType('sessionStorage');

    /*----------  ROUTES  ----------*/

    /*----------  DO NOT DELETE  ----------*/
    $stateProvider
    /*----------  DO NOT DELETE  ----------*/

    /*================================
    =            HOMEPAGE            =
    ================================*/

    .state('home', {
      url:   '/',
      views: {
        content: {
          templateUrl: '/js/home/home.html',
          controller:  'HomeController'
        }
      }
    })

    /*=====  End of HOMEPAGE  ======*/


    /*----------  DO NOT DELETE  ----------*/
    ;
    /*----------  DO NOT DELETE  ----------*/

    $urlRouterProvider.otherwise('/');
  }

})();
