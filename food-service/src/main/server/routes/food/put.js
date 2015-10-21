const Boom = require('boom');

module.exports = [
    {
        path: '/food/{foodId}',
        method: 'PUT',
        config: {
            tags: ['api'],
            description: 'Create or edit an existing food item',
            handler: (request, reply) => {
                reply(
                    Boom.notImplemented()
                );
            }
        }
    }
]
