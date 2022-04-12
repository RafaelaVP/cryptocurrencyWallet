'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.addColumn('coins', 'walletAddress', Sequelize.UUID);
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.changeColumn('coins', 'walletAddress', {
            type: Sequelize.UUID,
        });
    }
};
