'use strict';

/*===============================
=            MODULES            =
===============================*/

import _ from 'lodash';
import uuid from 'node-uuid';
import log from '../../config/logging';
import * as Security from '../../services/security';

import {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

/*=====  End of MODULES  ======*/

/*======================================
=            USER MUTATION            =
======================================*/

/**
 * Registers a new user profile
 * @param  {Sequelize.Model}   UserModel - the database model
 * @param  {GraphQLObjectType} UserType  - the user graph type
 * @return {Object}                      - the json result
 */
exports.UserMutation = (UserModel, UserType) => {
  return new GraphQLObjectType({
    name:   'UserMutation',
    fields: {
      createUser: {
        type: UserType,
        args: {
          email:    { type: new GraphQLNonNull(GraphQLString) },
          password: { type: new GraphQLNonNull(GraphQLString) }
        },
        resolve: function(rootValue, args) {
          let user = _.extend(args, {
            password: Security.encrypt(args.password, process.env.BCRYPT_SALT),
            token:    uuid.v4()
          });

          return UserModel.create(user)
          .then(userRef => {
            log.debug(`New User created: ${userRef.get('email')}`);
            return userRef;
          });
        }
      }
    }
  });
};

/*=====  End of USER MUTATION  ======*/

