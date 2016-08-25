'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
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
        type:         Sequelize.STRING,
        defaultValue: '',
        allowNull:    true
      },
      lastName: {
        type:         Sequelize.STRING,
        defaultValue: '',
        allowNull:    true
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

  down: queryInterface => {
    return queryInterface.dropTable('users');
  }
};
