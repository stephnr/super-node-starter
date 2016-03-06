'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: {
        type:          Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey:    true
      },
      email: {
        type:      Sequelize.STRING,
        allowNull: false,
        unique:    true
      },
      password: {
        type:      Sequelize.STRING,
        allowNull: false
      },
      token: {
        type:      Sequelize.UUID,
        allowNull: false,
        unique:    true
      },
      firstName: {
        type:      Sequelize.STRING,
        field:     'firstName',
        allowNull: true
      },
      lastName: {
        type:      Sequelize.STRING,
        field:     'lastName',
        allowNull: true
      },
      createdAt: {
        type:         Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull:    false
      },
      updatedAt: {
        type:         Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull:    false
      }
    });
  },

  down: function (queryInterface) {
    return queryInterface.dropTable('users');
  }
};
