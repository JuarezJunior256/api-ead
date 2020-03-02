require('dotenv-safe').config();
const Hapi = require('@hapi/hapi');
require('./services/mongo.service');

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
  });
  
  server.route({
    method: 'GET',
    path:'/',
    handler: () => 'Hello World!',
  });

await server.start();
console.log('Server running on %ss', server.info.uri);
};

process.on('unhandledRejection', (err) => {

console.log(err);
process.exit(1);
});

init(); 