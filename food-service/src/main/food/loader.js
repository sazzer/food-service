const DaoErrors = require('../dao/errors');

/**
 * Load an item of food by it's unique ID
 * @param {String} id The ID of the item of food to load
 * @return {Promise} a promise for the food item
 */
function loadById(id) {
    return new Promise((resolve, reject) => {
        if (id === '123456') {
            resolve({
                id: id,
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
        } else {
            throw DaoErrors.NotFoundError({
                resource: 'food',
                id: id
            })
        }
    });

    return Promise.resolve();
}

module.exports = {
    loadById: loadById
}
