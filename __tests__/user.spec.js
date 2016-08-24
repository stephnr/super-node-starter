'use strict';

/*===============================
=            MODULES            =
===============================*/

const assert = require('chai').assert;

// const Server = new (require('./app.setup'))();
const agent = require('supertest').agent();
// const mockAgent = require('superagent');
// const server = Server.instance();

// const jschema = require('jsonschema');
// const v = require('./schemas/users');

/*=====  End of MODULES  ======*/


/**
 * Builds the Authorized Request
 * @param  {Object} req - the mock server
 */
function authorizedRequest(req) {
  agent.attachCookies(req);
  return req;
}

describe('user routes', () => {

  it('should execute a succesful assertion', () => {
    assert.equal(true, true);
  });

});

