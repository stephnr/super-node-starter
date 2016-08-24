'use strict';

/*========================================
=            REQUIRED MODULES            =
========================================*/

import bcrypt from 'bcrypt-nodejs';

/*=====  End of REQUIRED MODULES  ======*/

////////////////////////////////////////////////////////
//                      Private                    /////
////////////////////////////////////////////////////////

/**
 * Encrypts the content using bcrypt to create a hash code
 * @param  {String} value       - content the content to encrypt
 * @param  {String} bcryptSalt  - salt to pad the value with
 * @return {String}             - crypted hash
 */
exports.encrypt = function(value, bcryptSalt) {
  const salt = bcrypt.genSaltSync(parseInt(bcryptSalt, 10));

  return bcrypt.hashSync(value, salt);
};

/**
 * Compares the content against the hash
 * @param  {String} guess - the guess of decrypted hash
 * @param  {String} hash  - the hash to compare against
 * @return {Boolean}      - valid flag
 */
exports.cryptCompare = function(guess, hash) {
  return bcrypt.compareSync(guess, hash);
};
