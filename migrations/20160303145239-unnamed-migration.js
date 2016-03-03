'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('USERS', {
      id:           Sequelize.BIGINT,
      email:        Sequelize.STRING,
      password:     Sequelize.STRING,
      token:        Sequelize.UUID,
      'first_name': Sequelize.STRING,
      'last_name':  Sequelize.STRING
    });
  },

  down: function (queryInterface) {
    return queryInterface.dropTable('USERS');
  }
};
