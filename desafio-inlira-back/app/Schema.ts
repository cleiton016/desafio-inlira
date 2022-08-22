import { gql } from "apollo-server-express";
const Schema = gql`
  type Cotacao {
    id: ID!,
    cotacaoCompra: Float,
    cotacaoVenda: Float,
    dataHoraCotacao: String,
    timestemp: String,
  }
  
  type Query {
    getCotacao(id: Int, dataHoraCotacao: String): Cotacao
  }
`;
export default Schema;
/*
* Cotação de compra
* Cotação de venda
* Data e Hora da Cotação
* Id da requisição
* Timestamp da requisição
*/