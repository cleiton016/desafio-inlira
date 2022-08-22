import { ContacaoComponent } from './components/cotacao/cotacao.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Resolver, useForm } from 'react-hook-form';
import { useQuery } from '@apollo/client';
import { GET_COTACAO } from './shema/cotacao';
import { useState } from 'react';


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
  const [dataCotacao, setDataCotacao] = useState<string>('')

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit(
    async (form) => {
      console.log(form.dataCotacao);
      const data = new Date(form.dataCotacao);
      const dataFormatada = ((data.getMonth() + 1)) + "-" + ((data.getDate() + 1)) + "-" + data.getFullYear();
      console.log(dataFormatada);
      setDataCotacao(dataFormatada)
    }
  );

  return (
    <div className="container">

      <div className="py-5 text-center">
        <h2>Desafio InLira</h2>
        <p className="lead"></p>
      </div>

      <div className="row">

        <ContacaoComponent dataDaCotacao={dataCotacao} />

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
