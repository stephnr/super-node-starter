'use strict';

/*========================================
=            GRAPH COMPONENTS            =
========================================*/

import {
  GraphQLSchema,
  GraphQLObjectType
} from 'graphql';

import * as queries from './queries';
import * as mutations from './mutations';

/*=====  End of GRAPH COMPONENTS  ======*/

export default new GraphQLSchema({
  query:    new GraphQLObjectType({
    name:   'RootQueryObjectType',
    fields: queries
  }),
  mutation: new GraphQLObjectType({
    name:   'RootMutationObjectType',
    fields: mutations
  })
});
