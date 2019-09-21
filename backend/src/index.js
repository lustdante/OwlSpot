require('./utils/loadEnv');

const { ApolloServer } = require('apollo-server');
const Schema = require('./schema');

const server = new ApolloServer(Schema);

server.listen({ port: process.env.app__PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
