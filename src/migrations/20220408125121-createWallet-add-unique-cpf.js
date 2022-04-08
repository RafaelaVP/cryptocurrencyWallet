'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.addConstraint('wallets',{
  type:'unique',
  name:'cpf',
  fields:['cpf']
})
},

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('wallets', 'cpf')
    
  }
  
};
