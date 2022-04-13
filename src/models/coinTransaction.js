const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  const CoinTransaction = sequelize.define('coinTransaction', {
      id: {
        type: Sequelize.UUID,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true,
        defaultValue: Sequelize.UUIDV4
      
  },
  coinId: {
    type: Sequelize.UUID,
     defaultValue: Sequelize.UUIDV4,
     allowNull: false,
    
},
  transactionId: {
    type: Sequelize.UUID,
     defaultValue: Sequelize.UUIDV4,
     allowNull: false,
     
}
  },{tableName:'coinTransaction'})
  CoinTransaction.associate = function(models) {
    CoinTransaction.belongsTo(models.coin, {foreignKey: 'coinId'})
    CoinTransaction.belongsTo(models.transaction, {foreignKey: 'transactionId'})
  };
  return CoinTransaction;
}
