const Joi = require('joi');
const Boom = require('boom');
const UnitsLoader = require('../loader');

module.exports = {
    path: '/api/units',
    method: 'GET',
    config: {
        tags: ['api', 'units'],
        description: 'Search all known Units',
        validate: {
            query: {
                type: Joi.string().description('The type of unit to return'),
                system: Joi.string().description('The system of unit to return'),
            }
        },
        handler: (request, reply) => {
            UnitsLoader.getUnits({
                type: request.query.type,
                system: request.query.system
            }).then((units) => {
                reply(units);
            });
        }
    }
};
