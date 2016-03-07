'use strict';

/*========================================
=            REQUIRED MODULES            =
========================================*/

const bcrypt = require('bcrypt-nodejs');

/*=====  End of REQUIRED MODULES  ======*/

////////////////////////////////////////////////////////
//                      Private                    /////
////////////////////////////////////////////////////////

export = {
  /**
   * Encrypts the content using bcrypt to create a hash code
   * @param  {String} value content the content to encrypt
   * @return {String}         crypted hash
   */
  encrypt: function(value: string) {
    var salt = bcrypt.genSaltSync(parseInt(process.env.BCRYPT_SALT));
    return bcrypt.hashSync(value, salt);
  },

  /**
   * Compares the content against the hash
   * @param  {String} guess the guess of decrypted hash
   * @param  {String} hash    the hash to compare against
   * @return {Boolean}        valid flag
   */
  cryptCompare: function(guess: string, hash: string) {
    return bcrypt.compareSync(guess, hash);
  }
}
