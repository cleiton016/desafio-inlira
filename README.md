# desafio-inlira


O desafio consiste em criar endpoint para buscar cotação do Dólar de acordo com uma data, o formato da data deve ser `MM-DD-YYYY` Ex.: `08-22-2022`.

Primeiramente a API deve consulta se existe uma cotação em sua base de dados, caso não exista a API deve realizar uma busca na API do Banco Central

Exemplo de retorno:

```json
{
    id: Int,
    cotacaoCompra: Decimal,
    cotacaoVenda: Decimal,
    dataHoraCotacao: Date,
    timestemp: Date
}
```

## Iniciando "desafio-inlira-back"

Entre na pasta com `cd desafio-inlira-back`

Enseguida rode o comando abaixo

`docker-compose up -d`

Ainda no mesmo diretorio rode os comando abaixo para criar o banco de dados e as migrações

`npx sequelize-cli db:create`

`npx sequelize-cli db:migrate

## Iniciando "desafio-inlira-front"

Entre na pasta com `cd desafio-inlira-front`

Inicialize o projeto com `npm run dev`
