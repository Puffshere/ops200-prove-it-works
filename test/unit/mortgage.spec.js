const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
    let mortgageCalculator = null;
  
    beforeEach(() => {
      mortgageCalculator = new Mortgage();
    });
  
    it('should have an principal propery', () => {
      expect(mortgageCalculator).to.have.property('principal');
    });

    it('should have an interest property', () => {
      expect(mortgageCalculator).to.have.property('interest');
    });

    it('should have an term property', () => {
      expect(mortgageCalculator).to.have.property('term');
    });

    it('should have an period property', () => {
      expect(mortgageCalculator).to.have.property('period');
    });

});





