'use strict';

const app = require('../bin/server/app');
const request = require('supertest');

let appServer = null;

/** Constructs the Mock Application Server */
class MockAppServer {

  /** Manages a Singleton */
  constructor() {
    if(!appServer) {
      // Build the app
      appServer = app;
    }
  }

  app() {
    return app;
  }

  instance(appInstance) {
    return appInstance ? request(appInstance) : request(appServer);
  }

  // login(agent, cb) {
  //   return new Promise((resolve, reject) => {
  //     agent.post('/users/login')
  //     .send({
  //       email:    'john.smith@gmail.com',
  //       password: '1234'
  //     })
  //     .expect(200).end(cb);
  //   });
  // }
}

module.exports = MockAppServer;
