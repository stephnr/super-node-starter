/* eslint no-magic-numbers: 0, brace-style: 0, no-multi-spaces: 0 */
(function() {
  'use strict';

  angular.module('app')
  .run(AppRun);

  /* @ngInject */
  /**
   * Application Run Procedure
   * @param {Function} $rootScope           main scope of app
   * @param {Function} $state               the active ui-state
   * @param {Object}   localStorageService  local storage service
   * @param {Object}   AUTH_EVENTS          object constant of authorization events
   * @param {Object}   HTTP_EVENTS          object constant of http events
   * @param {Object}   STATES               object constant of specific states by category
   */
  function AppRun($rootScope, $state, localStorageService, AUTH_EVENTS, HTTP_EVENTS, STATES) {
    /*=============================================>>>>>
    = STATE CHANGING =
    ===============================================>>>>>*/

    /**
     * Verifies that the next state is properly accessed via an
     * authorized user of the state denotes a publicly available state
     * @param  {Object}   e           the event object
     * @param  {Object}   toState     details of the next state
     * @param  {Object}   toParams    details of the parameters for the next state
     * @param  {Object}   fromState   details of the previous state
     * @param  {Object}   fromParams  details of the parameters for the previous state
     */
    $rootScope.$on('$stateChangeStart', (e, toState, toParams, fromState, fromParams) => {
      // stub
    });

    /*= End of STATE CHANGING =*/
    /*=============================================<<<<<*/

    /*=============================================>>>>>
    = STATE EVENT LISTENERS =
    ===============================================>>>>>*/

    $rootScope.$on(AUTH_EVENTS.LOGIN_SUCCESSFUL, () => { $state.go('calendar'); });
    $rootScope.$on(AUTH_EVENTS.UNAUTHORIZED,     () => { $state.go('login'); });

    /*= End of STATE EVENT LISTENERS =*/
    /*=============================================<<<<<*/
  }

})();
