import { gql } from "apollo-server-express";
const Schema = gql`
  type Cotacao {
    id: ID!,
    cotacaoCompra: Float,
    cotacaoVenda: Float,
    dataHoraCotacao: String,
  }
  
  type Query {
    getCotacao(id: Int, dataHoraCotacao: String): Cotacao
  }
`;
export default Schema; 