
'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('coins', 'walletAddress', {
      type: Sequelize.UUID,
        references: {
          model: 'wallets',
          key: 'address'
        }
     })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('coins', 'walletAddress', {
      type: Sequelize.UUID,
     })
  }
};