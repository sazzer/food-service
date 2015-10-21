/**
 * Constructor Function for a Unit
 * @param {Object} args The arguments to the constructor
 * @param {String} args.id The ID of the Unit
 * @param {String} args.type The type of the Unit
 * @param {String} args.system The system of measurement of the Unit
 * @param {Number} args.scalingFactor The scaling factor of the unit
 */
function Unit(args) {
    this.id = args.id;
    this.type = args.type;
    this.system = args.system;
    this.scalingFactor = args.scalingFactor;
    
    Object.freeze(this);
}

module.exports = Unit;
