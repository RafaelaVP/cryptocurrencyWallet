const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  const Transaction = sequelize.define('transaction', {
    id: {
      type: Sequelize.UUID,
       autoIncrement: true,
       allowNull: false,
       primaryKey:true,
       defaultValue: Sequelize.UUIDV4
  },
    value: {
       type: Sequelize.DECIMAL(12,4),
       allowNull:false
  },
  datetime: {
    type: Sequelize.DATE,
    defaultValue: new Date().toISOString(),
    },
    sendTo: {
     type: Sequelize.STRING,
     allowNull:false
 },
    receiveFrom:{
     type: Sequelize.STRING,
     allowNull:false
 },
    currentCotation: {
      type: Sequelize.DECIMAL(12,4),
 }

  }, {tableName: 'transactions'})

  Transaction.associate = function(models) {
    Transaction.belongsToMany(models.coin, {
      through: {
        model: models.coinTransaction
       },
        foreignKey: 'transactionId',
        as: 'coins',
        constraint: true
      })
  }

  return Transaction; 
}