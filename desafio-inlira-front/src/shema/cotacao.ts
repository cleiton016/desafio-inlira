import { gql } from "@apollo/client";

export const GET_COTACAO = gql`

    query GetCotacao($dataHoraCotacao: String!) {
    getCotacao(dataHoraCotacao: $dataHoraCotacao) {
        id
        cotacaoCompra
        cotacaoVenda
        dataHoraCotacao
        timestemp
    }
    }

`;