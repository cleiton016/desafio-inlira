import cotacao from "./dataset";
const Resolvers = {
  Query: {
    getCotacao: (_: any, args: any) => { 
      console.log(args);
      return cotacao.find((cotacao) => cotacao.id === args.id);
    },
  },
};
export default Resolvers;