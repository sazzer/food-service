const Hapi = require('hapi');

function startServer() {
    const server = new Hapi.Server();
    server.connection({
        port: 3000
    });

    server.start(() => {
        console.log(`Server running on ${server.info.uri}`);
    });
}

module.exports = {
    startServer: startServer
};
