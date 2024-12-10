require("dotenv").config();

const Express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const {
  ApolloServerPluginDrainHttpServer,
} = require("@apollo/server/plugin/drainHttpServer");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");

const typeDefs = require("./graphql/schema");

const resolvers = require("./graphql/resolvers");

// For parsing the express payloads
const app = Express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

(async () => {
  await server.start();

  app.use(cors(), bodyParser.json(), expressMiddleware(server));

  new Promise((resolve) =>
    httpServer.listen({ port: process.env.PORT }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:${process.env.PORT}`);
})();
