const Joi = require('joi');
const Boom = require('boom');
const UnitsLoader = require('../loader');

module.exports = {
    path: '/api/units/{unit}',
    method: 'GET',
    config: {
        tags: ['api', 'units'],
        description: 'Retrieve a single Unit',
        validate: {
            params: {
                unit: Joi.string().required().description('The unit to retrieve')
            }
        },
        handler: (request, reply) => {
            UnitsLoader.getUnitById(request.params.unit)
                .catch((e) => {
                    console.log(e);
                    return Boom.NotFoundError(e.message, e.id);
                })
                .then((response) => {
                    console.log(response);
                    reply(response);
                });
        }
    }
};
