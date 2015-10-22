const Unit = require('./unit');
const errors = require('./errors');
const unitsData = require('./units.json');

const units = Object.keys(unitsData).map((u) => {
    const unitData = unitsData[u];
    return new Unit({
        id: u,
        type: unitData.type,
        system: unitData.system,
        scalingFactor: unitData.scalingFactor
    });
});

/**
 * Get the Unit that has the given ID
 * @param {String} id The ID of the Unit to retrieve
 * @return {Promise} A promise for the Unit
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

/**
 * Get all of the units that match the provided Type and System.
 * @param {Object} filter The filter to apply
 * @param {String} filter.type The type to filter on. Optional.
 * @param {String} filter.system The system to filter on. Optional.
 * @return {Promise} A promise for the results
 */
function getUnits(filter) {
    const filterParams = filter || {};
    const filterType = filterParams.type;
    const filterSystem = filterParams.system;

    return new Promise((resolve, reject) => {
        resolve(units.filter((u) => {
            const matchType = !(filterType && filterType !== u.type);
            const matchSystem = !(filterSystem && filterSystem !== u.system);

            return matchType && matchSystem;
        }));
    });
}

module.exports = {
    getUnitById: getUnitById,
    getUnits: getUnits
}
