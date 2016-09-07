'use strict';

/*===============================
=            MODULES            =
===============================*/

import * as _ from 'lodash';
import * as Sequelize from 'sequelize';

import {
  GraphQLString,
  GraphQLInt,
  GraphQLObjectType
} from 'graphql';

const gqlCustom = require('graphql-custom-types');

const gsql = require('graphql-sequelize');

/*=====  End of MODULES  ======*/

gsql.typeMapper.mapType(type => {
  if (type instanceof Sequelize.BIGINT) {
    return GraphQLInt;
  } else if (type instanceof Sequelize.DATE) {
    return gqlCustom.GraphQLDateTime;
  } else {
    return GraphQLString;
  }
});

import Models from '../../models';
const UserModel = Models.Users;

/*========================================
=            USER OBJECT TYPE            =
========================================*/

export const UserType = new GraphQLObjectType({
  name:        'User',
  description: 'the application user',
  fields:      gsql.attributeFields(UserModel, {
    exclude:   [ 'password', 'createdAt', 'updatedAt' ]
  })
});

/*=====  End of USER OBJECT TYPE  ======*/
