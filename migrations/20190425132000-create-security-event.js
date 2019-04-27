'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SecurityEvents', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pattern: {
        type: Sequelize.STRING
      },
      tunnelName: {
        type: Sequelize.STRING
      },
      tunnelID: {
        type: Sequelize.INTEGER
      },
      URI: {
        type: Sequelize.STRING
      },
      srcIP: {
        type: Sequelize.STRING
      },
      srcPort: {
        type: Sequelize.INTEGER
      },
      source: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('SecurityEvents');
  }
};