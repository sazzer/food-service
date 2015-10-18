const Hapi = require('hapi');
const path = require('path');

function startServer() {
    const server = new Hapi.Server();
    server.connection({
        port: 3000
    });

    server.register([{
        register: require('good'),
        options: {
            opsInterval: 1000,
            reporters: [
                {
                    reporter: require('good-console'),
                    events: {
                        log: '*',
                        response: '*'
                    }
                }
            ]
        }
    }, {
        register: require('hapi-info'),
        options: {

        }
    }, {
        register: require('hapi-routes-status'),
        options: {

        }
    }, {
        register: require('hapi-router'),
        options: {
            cwd: __dirname,
            routes: 'routes/*.js'
        }
    }, {
        register: require('blipp'),
        options: {
            showAuth: true,
            showStart: true
        }
    }], (err) => {
        server.start(() => {
            console.log(`Server running on ${server.info.uri}`);
        });
    });
}

module.exports = {
    startServer: startServer
};
