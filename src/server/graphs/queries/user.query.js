'use strict';

/*===============================
=            MODULES            =
===============================*/

import _ from 'lodash';

// Use resolver for an unbounded query engine
// import { resolver } from 'graphql-sequelize';
import log from '../../config/logging';

import {
  GraphQLString,
  GraphQLInt,
  GraphQLObjectType
} from 'graphql';

/*=====  End of MODULES  ======*/


/*==================================
=            USER QUERY            =
==================================*/

/**
 * Retrieves the user object
 * @param  {Sequelize.Model}   UserModel - the database model
 * @param  {GraphQLObjectType} UserType  - the user graph type
 * @return {Object}                      - the json result
 */
exports.UserQuery = (UserModel, UserType) => {
  return new GraphQLObjectType({
    name:   'FetchUserQuery',
    fields: {
      user: {
        type: UserType,
        args: {
          id: {
            type:        GraphQLInt,
            description: 'id of the user'
          },
          token: {
            type:        GraphQLString,
            description: 'jwt token of the user'
          }
        },
        resolve: function(rootValue, args) {
          return UserModel.findOne({
            where: args
          }).then(userRef => {
            if(userRef) {
              log.debug(`Found User # ${userRef.get('id')}`);
              return _.omit(userRef.toJSON(), [ 'token' ]);
            } else {
              return _.omit(userRef.toJSON(), [ 'token' ]);
            }
          });
        }
      }
    }
  });
};

/*=====  End of USER QUERY  ======*/

