'use strict';

import {
  GraphQLFieldConfigMap
} from 'graphql';

import user from './user.mutation';

const mutations: GraphQLFieldConfigMap = {
  user: user
};

export default mutations;
