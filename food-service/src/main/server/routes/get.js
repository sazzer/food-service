const Boom = require('boom');

module.exports = [
    {
        path: '/api/{foodId}',
        method: 'GET',
        config: {
            tags: ['api'],
            description: 'Load an existing food item',
            handler: (request, reply) => {
                reply(
                    Boom.notImplemented()
                );
            }
        }
    }
]
