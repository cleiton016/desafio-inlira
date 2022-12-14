import { useQuery } from "@apollo/client";
import { GET_COTACAO } from "../../shema/cotacao";

type ContacaoProps = {
    cotacaoCompra?: number;
    cotacaoVenda?: number;
    dataDaCotacao?: String
}

export function ContacaoComponent(props: ContacaoProps) {
    const {loading, data, error} = useQuery(GET_COTACAO, {
        variables: {
          dataHoraCotacao: props.dataDaCotacao
        }
      })
    console.log("------------");
    console.log(data);
    console.log("------------");
    return (

        <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Resultado da busca</span>
            </h4>
            <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 className="my-0">Cotação Compra: <span className="text-muted">${loading?"...":data?.getCotacao?.cotacaoCompra}</span></h6>
                        <h6 className="my-0">Cotação Venda: <span className="text-muted">${loading?"...":data?.getCotacao?.cotacaoVenda}</span></h6>
                        <small className="text-muted">Data da cotação: {loading?"...":data?.getCotacao?.dataHoraCotacao}</small>
                    </div>
                </li>
            </ul>
        </div>
    )
}