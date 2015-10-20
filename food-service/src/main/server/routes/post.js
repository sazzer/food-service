const Boom = require('boom');

module.exports = [
    {
        path: '/api/',
        method: 'POST',
        config: {
            tags: ['api'],
            description: 'Create new food items',
            handler: (request, reply) => {
                reply(
                    Boom.notImplemented()
                );
            }
        }
    }
]
