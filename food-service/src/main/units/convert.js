const errors = require('./errors');

/**
 * Calculate a conversion from one unit to another unit
 * @param {Unit} from The unit to convert from
 * @param {Unit} to The unit to convert to
 * @param {Number} qty The amount to convert. Defaults to 1 if not set.
 * @return {Number} The converted amount
 */
function convert(from, to, qty) {
    const realqty = qty || 1;

    if (from.type !== to.type) {
        throw errors.MismatchedTypeError();
    }

    const fromScalingFactor = from.scalingFactor;
    const toScalingFactor = to.scalingFactor;
    const scalingFactor = fromScalingFactor / toScalingFactor;
    const scaled = realqty * scalingFactor;
    return scaled;
}

module.exports = convert;
