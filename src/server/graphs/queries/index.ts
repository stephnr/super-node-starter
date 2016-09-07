'use strict';

import {
  GraphQLFieldConfig,
  GraphQLFieldConfigMap
} from 'graphql';

import user from './user.query';

const queries: GraphQLFieldConfigMap = {
  user: user
};

export default queries;
