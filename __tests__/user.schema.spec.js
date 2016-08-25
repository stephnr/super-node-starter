/* eslint no-undefined:0 */
'use strict';

/*===============================
=            MODULES            =
===============================*/

const mockServer = require('graphql-tools').mockServer;
const UserSchema = require('../bin/server/graphs/schemas/user.schema').UserSchema;

/*=====  End of MODULES  ======*/

const mockGraphServer = mockServer(UserSchema, {
  UUID: () => 'xxx'
});

/*=============================
=            TESTS            =
=============================*/

describe('User GraphQL Tests', () => {
  it('should have a schema', () => {
    UserSchema.should.not.equal(undefined);
  });

  it('should be able to query for a user', () => {
    mockGraphServer.query(`{
      user(token: "xxx") {
        id,
        email,
        token,
        firstName,
        lastName
      }
    }`).then(resp => {
      resp.data.user.email.should.equal('Hello World');
      resp.data.user.token.should.equal('xxx');
    });
  });
});

/*=====  End of TESTS  ======*/

