const Boom = require('boom');

module.exports = [
    {
        path: '/food/{foodId}',
        method: 'GET',
        config: {
            tags: ['api'],
            description: 'Load an existing food item',
            handler: (request, reply) => {
                reply({
                    id: '123456',
                    name: 'Chicken Breast',
                    size: {
                        quantity: 100,
                        units: 'grams'
                    },
                    nutrition: {
                        energy: {
                            total: 165,
                            units: 'calories'
                        },
                        fat: {
                            total: 3.6,
                            units: 'grams',
                            rda: 0.05
                        },
                        saturatedFar: {
                            total: 1,
                            units: 'grams',
                            rda: 0.05
                        },
                        cholesterol: {
                            total: 0.085,
                            units: 'grams',
                            rda: 0.28
                        },
                        sodium: {
                            total: 0.074,
                            units: 'grams',
                            rda: 0.03
                        },
                        potassium: {
                            total: 0.256,
                            units: 'grams',
                            rda: 0.07
                        },
                        carbohydrates: {
                            total: 0,
                            units: 'grams',
                            rda: 0
                        },
                        protein: {
                            total: 31,
                            units: 'grams',
                            rda: 0.62
                        }
                        
                    }
                });
            }
        }
    }
]
