import { ContacaoComponent } from './components/cotacao/cotacao.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Resolver, useForm } from 'react-hook-form';


type FormValues = {
  dataCotacao: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: !values.dataCotacao ? {} : values,
    errors: !values.dataCotacao
      ? {
          dataCotacao: {
            type: "required",
            message: "Informe uma data!"
          }
        }
      : {}
  };
};

function App() {

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (


    <div className="container">

      <div className="py-5 text-center">
        <h2>Desafio InLira</h2>
        <p className="lead"></p>
      </div>

      <div className="row">
        <ContacaoComponent cotacaoCompra={5.79} cotacaoVenda={5.78} dataDaCotacao="17-08-2022" />

        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Filtrar Cotação</h4>
          <form onSubmit={onSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Data da contação</label>
                <input {...register("dataCotacao")} type="date" className="form-control" />
                {errors?.dataCotacao && <p>{errors.dataCotacao.message}</p>}
              </div>
              <div className="col-md-6 mt-4 ">
                <button className="btn btn-primary" type="submit">Buscar</button>
              </div>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default App
