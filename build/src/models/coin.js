"use strict";
const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    const Coin = sequelize.define('coin', {
        id: {
            type: Sequelize.UUID,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        coin: {
            type: Sequelize.STRING,
            allowNull: false
        },
        fullname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        amont: {
            type: Sequelize.DECIMAL,
            allowNull: false
        },
        walletAddress: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        }
    }, { tableName: 'coins' });
    Coin.associate = function (models) {
        Coin.belongsTo(models.wallet, { foreignKey: 'walletAddress', as: 'wallets' });
        Coin.belongsToMany(models.transaction, {
            through: 'coinTransaction',
            foreignKey: 'coinId',
            as: 'transactions',
            constraint: true
        });
    };
    return Coin;
};
