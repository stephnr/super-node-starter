'use strict';

/*========================================
=            GRAPH COMPONENTS            =
========================================*/

import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLObjectTypeConfig
} from 'graphql';

import queries from './queries';
import mutations from './mutations';

/*=====  End of GRAPH COMPONENTS  ======*/

const queryConfig: GraphQLObjectTypeConfig = {
  name:   'RootQueryObjectType',
  fields: queries
};

const mutationConfig: GraphQLObjectTypeConfig = {
  name:   'RootMutationObjectType',
  fields: mutations
};

export default new GraphQLSchema({
  query:    new GraphQLObjectType(queryConfig),
  mutation: new GraphQLObjectType(mutationConfig)
});
