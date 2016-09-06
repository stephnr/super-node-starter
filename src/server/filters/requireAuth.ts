'use strict';

/**
 * Attempts to authorize the request
 * @param  {Sequelize.Model} Users - the user database model
 * @param  {String}          token - the user token
 * @return {Object}                - the user model
 */
const requireAuth = (Users, token) => {
  return Users.findOne({
    where: { token: token }
  }).catch(err => {
    throw new Error(`Failed to find user with token: ${token}: ${err.message}`);
  });
};

export { requireAuth };
