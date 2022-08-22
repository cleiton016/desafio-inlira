import { Conn } from './../index';
import { DataTypes, Model } from 'sequelize';


class Cotacao extends Model {}

Cotacao.init({
    cotacaoCompra: DataTypes.DECIMAL,
    cotacaoVenda: DataTypes.DECIMAL,
    dataHoraCotacao: DataTypes.DATE
}, {
    sequelize: Conn,
    modelName: 'Cotacao',
    tableName: 'Cotacao'
});


export default Cotacao;