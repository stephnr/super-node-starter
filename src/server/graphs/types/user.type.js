'use strict';

/*===============================
=            MODULES            =
===============================*/

import _ from 'lodash';
import Sequelize from 'sequelize';

import {
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
  description: 'A user',
  fields:      _.assign(attributeFields(UserModel, {
    exclude:   [ 'createdAt', 'updatedAt' ]
  }))
});

/*=====  End of USER OBJECT TYPE  ======*/
