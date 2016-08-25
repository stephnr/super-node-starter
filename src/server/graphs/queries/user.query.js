'use strict';

/*===============================
=            MODULES            =
===============================*/

import { resolver } from 'graphql-sequelize';

import {
  GraphQLString,
  GraphQLInt,
  GraphQLObjectType
} from 'graphql';

/*=====  End of MODULES  ======*/


/*==================================
=            USER QUERY            =
==================================*/

exports.UserQuery = (UserModel, UserType) => {
  return new GraphQLObjectType({
    name:   'UserQueryType',
    fields: {
      user: {
        type: UserType,
        args: {
          id: {
            type:        GraphQLInt,
            description: 'id of the user'
          },
          email: {
            type:        GraphQLString,
            description: 'email of the user'
          }
        },
        resolve: resolver(UserModel, {
          // includes any associations of the user object
          include: true
        })
      }
    }
  });
};

/*=====  End of USER QUERY  ======*/

