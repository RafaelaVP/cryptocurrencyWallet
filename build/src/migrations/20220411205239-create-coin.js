'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Coins', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                default: Sequelize.UUID
            },
            fullname: {
                type: Sequelize.STRING
            },
            coin: {
                type: Sequelize.STRING
            },
            amont: {
                type: Sequelize.DECIMAL
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
        await queryInterface.dropTable('Coins');
    }
};
