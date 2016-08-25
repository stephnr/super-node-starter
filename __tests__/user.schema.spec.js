'use strict';

/*===============================
=            MODULES            =
===============================*/

require('chai').should();

const mockServer = require('graphql-tools').mockServer;
const UserSchema = require('../bin/server/graphs/schemas/user.schema').UserSchema;

/*=====  End of MODULES  ======*/


/*=============================
=            TESTS            =
=============================*/

describe('User GraphQL Tests', function() {
  it('should have a schema', function() {
    UserSchema.should.not.equal(undefined);
  });
});

/*=====  End of TESTS  ======*/

