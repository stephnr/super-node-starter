'use strict';

/*===============================
=            MODULES            =
===============================*/

import {
  GraphQLSchema
} from 'graphql';

import {
  UserQuery
} from '../queries';

import {
  UserMutation
} from '../mutations';

import {
  UserType
} from '../types';

/*=====  End of MODULES  ======*/

import Models from '../../models';
const UserModel = Models.Users;

/*==============================
=            SCHEMA            =
==============================*/

exports.UserSchema = new GraphQLSchema({
  query:    UserQuery(UserModel, UserType),
  mutation: UserMutation(UserModel, UserType)
});

/*=====  End of SCHEMA  ======*/

