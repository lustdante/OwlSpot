require('./utils/loadEnv');

const { ApolloServer } = require('apollo-server');
const Schema = require('./schema');

const server = new ApolloServer({
  ...Schema,
  cors: false,
  playground: true,
  introspection: true,
});

server.listen({ port: process.env.app__PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
