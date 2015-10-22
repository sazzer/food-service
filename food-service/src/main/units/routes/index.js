module.exports = (server) => {
    server.route(require('./list'));
    server.route(require('./get'));
}
