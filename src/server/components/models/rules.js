'use strict';

///////////////////////////////////////////////////////////////////////
///                         DISCLAIMER                              ///
///////////////////////////////////////////////////////////////////////
///                                                                 ///
///       These objects can be modified to alter required params    ///
///       for REST endpoints and how data is provided/managed in    ///
///       the Object Relational Models for the database             ///
///                                                                 ///
///////////////////////////////////////////////////////////////////////
///                         DISCLAIMER                              ///
///////////////////////////////////////////////////////////////////////

export default {

  /*=============================================>>>>>
  = USERS =
  ===============================================>>>>>*/

  /**
   * Rules for the User Model
   * @type {Object}
   */
  User: {
    'email': [ 'required', 'email' ]
  }

};
