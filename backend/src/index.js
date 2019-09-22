require('./utils/loadEnv');

const server = require('./server');

server
  .start(
    {
      port: process.env.app__PORT,
      endpoint: '/graphql',
      playground: '/playground',
    },
    cfg => {
      console.log(
        cfg,
        `Server is running, api is on path https://localhost:${cfg.port}${cfg.endpoint}`,
      );
      console.log(
        `Open http://localhost:${cfg.port}${cfg.playground} for playground`,
      );
    },
  )
  .catch(err => console.error(err, '---- error while starting server'));
