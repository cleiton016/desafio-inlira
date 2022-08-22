'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Cotacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cotacao.init({
    cotacaoCompra: DataTypes.DECIMAL,
    cotacaoVenda: DataTypes.DECIMAL,
    dataHoraCotacao: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Cotacao',
    tableName: 'Catacao'
  });
  return Cotacao;
};