const expect = require('chai').expect;
const Unit = require('../../main/units/unit');
const convert = require('../../main/units/convert');
const errors = require('../../main/units/errors');

/** @test {convert} */
describe('units', function() {
    describe('#convert()', function () {
        const kgs = new Unit({
            id: 'kg',
            type: 'weight',
            system: 'metric',
            scalingFactor: 1000
        });
        const lbs = new Unit({
            id: 'lb',
            type: 'weight',
            system: 'imperial',
            scalingFactor: 453.592
        });
        const m = new Unit({
            id: 'M',
            type: 'length',
            system: 'metric',
            scalingFactor: 1
        });

        it('should produce the correct scaling factor from Kg to Lb', () => {
            expect(convert(kgs, lbs)).to.be.within(2.2046, 2.2047);
        });

        it('should produce the correct scaling factor from Lb to Kg', () => {
            expect(convert(lbs, kgs)).to.be.within(0.4535, 0.4536);
        });

        it('should correctly convert 2Kg to Lb', () => {
            expect(convert(kgs, lbs, 2)).to.be.within(4.4092, 4.4093);
        });

        it('should correctly convert 2Lb to Kg', () => {
            expect(convert(lbs, kgs, 2)).to.be.within(0.9071, 0.9072);
        });

        it('should not be able to convert Kg to M', () => {
            expect(() => {convert(kgs, m) }).to.throw('Can only convert between units of the same type');
        });
    });
});
