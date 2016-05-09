'use strict';

/*========================================
=            REQUIRED MODULES            =
========================================*/

import * as bcrypt from 'bcrypt-nodejs';

/*=====  End of REQUIRED MODULES  ======*/

////////////////////////////////////////////////////////
//                      Private                    /////
////////////////////////////////////////////////////////

/**
 * Encrypts the content using bcrypt to create a hash code
 * @param  {String} value content the content to encrypt
 * @return {String}         crypted hash
 */
export function encrypt(value: string) {
  var salt = bcrypt.genSaltSync(parseInt(process.env.BCRYPT_SALT));
  return bcrypt.hashSync(value, salt);
}

/**
 * Compares the content against the hash
 * @param  {String} guess the guess of decrypted hash
 * @param  {String} hash    the hash to compare against
 * @return {Boolean}        valid flag
 */
export function cryptCompare(guess: string, hash: string) {
  return bcrypt.compareSync(guess, hash);
}
