const Boom = require('boom');

module.exports = [
    {
        path: '/food/{foodId}',
        method: 'DELETE',
        config: {
            tags: ['api'],
            description: 'Delete an existing food item',
            handler: (request, reply) => {
                reply(
                    Boom.notImplemented()
                );
            }
        }
    }
]
