const expect = require('chai').expect;
const UnitLoader = require('../../main/units/loader');
const errors = require('../../main/units/errors');

describe('units/loader', () => {
    /** @test {getUnitById} */
    describe('#getUnitById()',  () => {
        it('should find the correct unit when a valid ID is requested', () => {
            return Promise.all([
                expect(UnitLoader.getUnitById('g')).to.eventually.have.property('id', 'g'),
                expect(UnitLoader.getUnitById('g')).to.eventually.have.property('type', 'weight'),
                expect(UnitLoader.getUnitById('g')).to.eventually.have.property('system', 'metric'),
                expect(UnitLoader.getUnitById('g')).to.eventually.have.property('scalingFactor', 1)
            ]);
        });
        it('should throw an error when an invalid ID is requested', () => {
            return expect(UnitLoader.getUnitById('unknown')).to.eventually.be.rejectedWith('No Unit with the ID "unknown" was found');
        });
    });

    /** @test {getUnits} */
    describe('#getUnits()', () => {
        describe('Filtered by a valid Type', () => {
            const units = UnitLoader.getUnits({type: 'weight'});
            it('Returned some results', () => {
                return expect(units).to.not.become([]);
            });
        });
        describe('Filtered by an invalid Type', () => {
            const units = UnitLoader.getUnits({type: 'unknown'});
            it('Returned no results', () => {
                return expect(units).to.become([]);
            });
        });
        describe('Filtered by a valid System', () => {
            const units = UnitLoader.getUnits({system: 'metric'});
            it('Returned some results', () => {
                return expect(units).to.not.become([]);
            });
        });
        describe('Filtered by an invalid System', () => {
            const units = UnitLoader.getUnits({system: 'unknown'});
            it('Returned no results', () => {
                return expect(units).to.become([]);
            });
        });
        describe('Unfiltered', () => {
            const units = UnitLoader.getUnits();
            it('Returned some results', () => {
                return expect(units).to.not.become([]);
            });
        });
    });
});
