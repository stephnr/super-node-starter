'use strict';

/*===============================
=            MODULES            =
===============================*/

import * as _ from 'lodash';
import * as Sequelize from 'sequelize';

import {
  GraphQLInt,
  GraphQLObjectType
} from 'graphql';

import {
  GraphQLDateTime,
  GraphQLUUID
} from 'graphql-custom-types';

import { attributeFields, typeMapper } from 'graphql-sequelize';

/*=====  End of MODULES  ======*/

typeMapper.mapType(type => {
  if (type instanceof Sequelize.UUID) {
    return GraphQLUUID;
  } else if (type instanceof Sequelize.BIGINT) {
    return GraphQLInt;
  } else if (type instanceof Sequelize.DATE) {
    return GraphQLDateTime;
  }
  // use default for everything else
  return false;
});

import Models from '../../models';
const UserModel = Models.Users;

/*========================================
=            USER OBJECT TYPE            =
========================================*/

exports.UserType = new GraphQLObjectType({
  name:        'User',
  description: 'the application user',
  fields:      _.assign(attributeFields(UserModel, {
    exclude:   [ 'password', 'createdAt', 'updatedAt' ]
  }))
});

/*=====  End of USER OBJECT TYPE  ======*/
