class Cotacao {
    id!: number;
    cotacaoCompra!: number;
    cotacaoVenda!: number;
    dataHoraCotacao!: String;

    constructor(id: number, cotacaoCompra: number, cotacaoVenda: number, dataHoraCotacao: String){
        this.id = id;
        this.cotacaoCompra = cotacaoCompra;
        this.cotacaoVenda = cotacaoVenda
        this.dataHoraCotacao = dataHoraCotacao
    }

}

export default Cotacao;