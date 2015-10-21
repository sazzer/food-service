const Boom = require('boom');
const FoodLoader = require('../../../food/loader');

module.exports = [
    {
        path: '/food/{foodId}',
        method: 'GET',
        config: {
            tags: ['api'],
            description: 'Load an existing food item',
            handler: (request, reply) => {
                FoodLoader.loadById(request.params.foodId)
                    .catch((e) => {
                        return Boom.notFound(e.message);
                    })
                    .then(reply);
            }
        }
    }
]
