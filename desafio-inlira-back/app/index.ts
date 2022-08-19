import { ApolloServer } from "apollo-server-express";
import Schema from "./Schema";
import Resolvers from "./Resolvers";
import express from "express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";

const app = express();
const httpServer = http.createServer(app);

async function startApolloServer(schema: any, resolvers: any) {
    const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  }) as any;

  await server.start();
  server.applyMiddleware({ app });

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve) //run the server on port 4000
  );

  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer(Schema, Resolvers);