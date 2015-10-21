const expect = require('chai').expect;
const Unit = require('../../main/units/unit');

describe('units/Unit', function() {
    describe('new', function () {
        const unit = new Unit({
            id: 'g',
            type: 'weight',
            system: 'metric',
            scalingFactor: 1
        });
        
        it('should have constructed the correct type', () => {
            expect(unit).to.be.an.instanceOf(Unit);
        });
        
        it('should have the correct ID', () => {
            expect(unit.id).to.equal('g');
        });
        
        it('should have the correct Type', () => {
            expect(unit.type).to.equal('weight');
        });
        
        it('should have the correct System', () => {
            expect(unit.system).to.equal('metric');
        });
        
        it('should have the correct Scaling Factor', () => {
            expect(unit.scalingFactor).to.equal(1);
        });
        
        it('should not be able to change the ID', () => {
            unit.id = 'oz';
            expect(unit.id).to.equal('g');
        });
        
        it('should not be able to change the Type', () => {
            unit.type = 'volume';
            expect(unit.type).to.equal('weight');
        });
        
        it('should not be able to change the System', () => {
            unit.system = 'imperial';
            expect(unit.system).to.equal('metric');
        });
        
        it('should not be able to change the Scaling Factor', () => {
            unit.scalingFactor = 50;
            expect(unit.scalingFactor).to.equal(1);
        });
    });
});
