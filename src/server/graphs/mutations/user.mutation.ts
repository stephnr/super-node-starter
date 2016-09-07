'use strict';

/*===============================
=            MODULES            =
===============================*/

import * as _ from 'lodash';
import * as uuid from 'node-uuid';
import {log} from '../../config';
import {Security} from '../../services';

import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLFieldConfig
} from 'graphql';

import { UserType } from '../types';

import Models from '../../models';
const UserModel = Models.Users;

/*=====  End of MODULES  ======*/


/*======================================
=            USER MUTATION            =
======================================*/

/**
 * Registers a new user profile
 * @param  {Sequelize.Model}   UserModel - the database model
 * @param  {GraphQLObjectType} UserType  - the user graph type
 * @return {Object}                      - the json result
 */
const createUser: GraphQLFieldConfig = {
  type: UserType,
  args: {
    email:    { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve: function(rootValue: any, args: any) {
    let user = _.extend(args, {
      password: Security.encrypt(args.password, process.env.BCRYPT_SALT),
      token:    uuid.v4()
    });

    return UserModel.create(user)
    .then(userRef => {
      log.debug(`New User created: ${userRef.get('email')}`);
      return userRef;
    });
  }
};

/*=====  End of USER MUTATION  ======*/

export default createUser;
