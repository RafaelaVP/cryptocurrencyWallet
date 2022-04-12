'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('coins', 'amont', {
        type: Sequelize.DECIMAL(12,4),
      
     
     })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('coins', 'amont', {
        type: Sequelize.DECIMAL(10,0),
     
     })
  }
};
