const {expect} = require('chai');
const findKeyByValue = require('../findKeyByValue');
const assertEqual = require('../assertEqual');

describe('#findKeyByValue', () => {
  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  it('should return the wire as a drama', () => {
    expect(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")).to.be.true;
  });

  it('should return That "70s Show" as undefined', () => {
    expect(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined)).to.be.true;
  });
});

