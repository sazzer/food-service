'use strict';

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
                    let response;
                    if (e.type === 'units.notFound') {
                        response = Boom.notFound(e.message, e.id);
                    }

                    if (!response) {
                        throw e;
                    } else {
                        return response;
                    }
                })
                .catch((e) => {
                    return Boom.badImplementation();
                })
                .then(reply);
        }
    }
};
