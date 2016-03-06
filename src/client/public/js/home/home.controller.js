(function() {
  'use strict';

  angular.module('app')
  .controller('HomeController', HomeController);

  /* @ngInject */
  /**
   * HomeController
   * @param {Object} $scope Angular Scope
   */
  function HomeController($scope) {

    /*============================
    =            INIT            =
    ============================*/

    $scope.init = () => {
      // stub
    };

    /*=====  End of INIT  ======*/

  }

})();
