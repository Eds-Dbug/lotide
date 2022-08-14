const assertEqual = require('../assertEqual');
const {expect} = require('chai');
const countOnly = require('../countOnly');

describe('#assertEqual', () => {
  it('should return values at correct position and undefined at correct place', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    
    expect(assertEqual(result1["Jason"], 1)).to.be.true;
    expect(assertEqual(result1["Karima"], undefined)).to.be.true;
    expect(assertEqual(result1["Fang"], 2)).to.be.true;
    expect(assertEqual(result1["Agouhanna"], undefined)).to.be.true;
  })
})

