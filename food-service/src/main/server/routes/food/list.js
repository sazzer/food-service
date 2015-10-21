const Boom = require('boom');

module.exports = [
    {
        path: '/food',
        method: 'GET',
        config: {
            tags: ['api'],
            description: 'Search all known food items',
            handler: (request, reply) => {
                reply(
                    Boom.notImplemented()
                );
            }
        }
    }
]
