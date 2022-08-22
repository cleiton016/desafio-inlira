'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Cotacao', [{
        cotacaoCompra: 5.50,
        cotacaoVenda: 5.49,
        dataHoraCotacao: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
     await queryInterface.bulkDelete('Cotacao', null, {});
  }
};
