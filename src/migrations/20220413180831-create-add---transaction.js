'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        default: Sequelize.UUID
      },
      value: {
        type: Sequelize.DECIMAL(12,4)
      },
      datetime: {
        allowNull: false,
        type: Sequelize.DATE,
       
      },
      sendTo: {
        type: Sequelize.STRING
      },
      receiveFrom:{
        type: Sequelize.STRING
      },
      currentCotation: {
        type: Sequelize.DECIMAL(12,4)
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Transactions');
  }
};
