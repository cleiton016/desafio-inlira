class ModelCotacao {
    id!: number;
    cotacaoCompra!: number;
    cotacaoVenda!: number;
    dataHoraCotacao!: String;
    timestemp!: String;

    constructor({id, cotacaoCompra, cotacaoVenda, dataHoraCotacao, createdAt}: any){
        this.id = id;
        this.cotacaoCompra = cotacaoCompra;
        this.cotacaoVenda = cotacaoVenda
        this.dataHoraCotacao = new Date(dataHoraCotacao).toISOString(),
        this.timestemp = new Date(createdAt).toISOString()
    }

}

export default ModelCotacao;