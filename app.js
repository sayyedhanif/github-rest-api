'use strict';

const Hapi = require('hapi');
const routes = require('hapi-auto-routes');


const init = async () => {

    const server = Hapi.server({
        port: 3030,
        host: 'localhost',
        routes: {
            cors: true,
          },
    });

    routes.bind(server).register({
        pattern: `${__dirname}/routes/**/*.js`,
    });

    await server.start();
    console.log('Server running on %ss', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
