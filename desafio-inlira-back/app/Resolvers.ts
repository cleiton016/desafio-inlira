import axios from 'axios';
import { Op } from 'sequelize';
import { Conn } from './database/index';
import ModelCotacao from './model.cotacao';

const Resolvers = {
  Query: {
    getCotacao: async (_: any, args: any) => { 
      if (args.dataHoraCotacao) {
        let resultado = await Conn.models.Cotacao.findOne(
          { 
            where: { dataHoraCotacao: {
              [Op.gte]: `${args.dataHoraCotacao} 00:00:00`,
              [Op.lte]: `${args.dataHoraCotacao} 23:59:59`,
            }} 
          }
        );
        if (resultado === null){
          const url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${args.dataHoraCotacao}'&$top=100&$format=json`
          console.log(url);
          resultado = await axios.get(url).then(
            async (res)=>{
              return  await Conn.models.Cotacao.create(res.data.value[0])
            }
          )
        }
        return new ModelCotacao(resultado)
        
        // return cotacao.filter(el => el.dataHoraCotacao .indexOf(args.dataHoraCotacao) > -1)[0];
      }
      
    },
  },
};
export default Resolvers;