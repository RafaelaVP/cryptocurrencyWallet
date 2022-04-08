const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  const Wallet = sequelize.define('wallet', {
    address: {
      type: Sequelize.UUID,
       autoIncrement: true,
       allowNull: false,
       primaryKey:true,
       defaultValue: Sequelize.UUIDV4
  },
   name: {
      type: Sequelize.STRING,
      allowNull:false
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull:false
 },
 birthdate: {
   type: Sequelize.STRING,
   allowNull:false
 }

  }, {tableName: 'wallets'})

  return Wallet; 
}