'use strict';

import {
  GraphQLFieldConfigMap
} from 'graphql';

import user from './user.mutation';

const mutations: GraphQLFieldConfigMap = {
  createUser: user
};

export default mutations;
