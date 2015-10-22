const Unit = require('./unit');
const errors = require('./errors');

const units = [
    new Unit({
        id: 'g',
        type: 'weight',
        system: 'metric',
        scalingFactor: 1
    })
];

/**
 * Get the Unit that has the given ID
 * @param {String} id The ID of the Unit to retrieve
 * @return {Unit} the Unit
 */
function getUnitById(id) {
    return new Promise((resolve, reject) => {
        const result = units.find((u) => {
            return id === u.id;
        });

        if (!result) {
            throw errors.NotFoundError({id: id});
        }
        resolve(result);
    });
}

module.exports = {
    getUnitById: getUnitById
}
