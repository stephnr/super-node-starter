// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import * as bcrypt from 'bcrypt-nodejs';

// ────────────────────────────────────────────────────────────────────────────────

export namespace Security {
  /**
   * Encrypts the content using bcrypt to create a hash code
   * @param  {String} value       - content the content to encrypt
   * @param  {String} bcryptSalt  - salt to pad the value with
   * @return {String}             - crypted hash
   */
  export function encrypt(value: string, bcryptSalt: string) {
    return bcrypt.hashSync(value, bcrypt.genSaltSync(parseInt(bcryptSalt, 10)));
  }

  /**
   * Compares the content against the hash
   * @param  {String} guess - the guess of decrypted hash
   * @param  {String} hash  - the hash to compare against
   * @return {Boolean}      - valid flag
   */
  export function cryptCompare(guess: string, hash: string) {
    return bcrypt.compareSync(guess, hash);
  }
}
