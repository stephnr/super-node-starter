'use strict';

/*===============================
=            MODULES            =
===============================*/

import * as _ from 'lodash';

/*=====  End of MODULES  ======*/

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
    'email':      ['required', 'email'],
    'first_name': 'required',
    'last_name':  'required',
    'password':   'required'
  },

  /**
   * Rules for User Login
   * @type {Object}
   */
  UserLogin: {
    'email':    'required',
    'password': 'required'
  },

  /**
   * Rules for User Signup
   * @type {Object}
   */
  UserSignup: _.omit(this.User, 'token'),

  /**
   * Rules for User Update
   * @type {Object}
   */
  UserUpdate: _.omit(this.User, ['password', 'token']),

  /*= End of USERS =*/
  /*=============================================<<<<<*/

}
