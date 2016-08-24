'use strict';

/*===============================
=            MODULES            =
===============================*/

import moment from 'moment';

/*=====  End of MODULES  ======*/

/*===============================
=            METHODS            =
===============================*/

export default {
  /**
   * Returns current timestamps
   * @return {Object} object of timestamps
   */
  getCurrentTimestamps: () => {
    const stamp = moment().toISOString();

    return {
      'created_at': stamp,
      'updated_at': stamp
    };
  },

  /**
   * Returns the timestamp formatted for the database
   * @return {String} timestamp
   */
  getTimestamp: () => {
    return moment().toISOString();
  }
};

/*=====  End of METHODS  ======*/
