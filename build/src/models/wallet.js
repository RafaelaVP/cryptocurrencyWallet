"use strict";
const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    const Wallet = sequelize.define('wallet', {
        address: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        cpf: {
            type: Sequelize.STRING,
            allowNull: false
        },
        birthdate: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, { tableName: 'wallets' });
    return Wallet;
};
