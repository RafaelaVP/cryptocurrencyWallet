'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('CoinTransaction', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                default: Sequelize.UUID
            },
            coinId: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'coins',
                    key: 'id'
                }
            },
            transactionId: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'transactions',
                    key: 'id'
                }
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
        await queryInterface.dropTable('CoinTransaction');
    }
};
