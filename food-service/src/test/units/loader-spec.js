const expect = require('chai').expect;
const UnitLoader = require('../../main/units/loader');
const errors = require('../../main/units/errors');

describe('units/loader', function() {
    /** @test {getUnitById} */
    describe('#getUnitById()', function () {
        it('should find the correct unit when a valid ID is requested', () => {
            const unit = UnitLoader.getUnitById('g');
            expect(unit.id).to.equal('g');
        });
        it('should throw an error when an invalid ID is requested', () => {
            expect(() => {
                UnitLoader.getUnitById('unknown')
            }).to.throw('No Unit with the ID "unknown" was found');
        });
    });
});
