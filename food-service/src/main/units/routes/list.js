const Boom = require('boom');
const UnitsLoader = require('../loader');

module.exports = {
    path: '/api/units',
    method: 'GET',
    config: {
        tags: ['api', 'units'],
        description: 'Search all known Units',
        handler: (request, reply) => {
            UnitsLoader.getUnits()
                .then((units) => {
                    reply(units);
                });
        }
    }
};
