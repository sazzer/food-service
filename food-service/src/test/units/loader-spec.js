const expect = require('chai').expect;
const UnitLoader = require('../../main/units/loader');
const errors = require('../../main/units/errors');

describe('units/loader', function() {
    /** @test {getUnitById} */
    describe('#getUnitById()', function () {
        it('should find the correct unit when a valid ID is requested', () => {
            return expect(UnitLoader.getUnitById('g')).to.eventually.have.property('id', 'g');
        });
        it('should throw an error when an invalid ID is requested', () => {
            return expect(UnitLoader.getUnitById('unknown')).to.eventually.be.rejectedWith('No Unit with the ID "unknown" was found');
        });
    });
});
