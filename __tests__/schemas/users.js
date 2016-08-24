'use strict';

const Validator = require('jsonschema').Validator;
const v = new Validator();

const SimpleUser = {
  id:         '/SimpleUser',
  type:       'object',
  properties: {
    id:    { type: 'string' },
    email: { type: 'string' }
  }
};

exports._SimpleUser = SimpleUser;

v.addSchema(SimpleUser, '/SimpleUser');

exports.validateUser = c => v.validate(c, SimpleUser);
