const {expect} = require('chai');
const letterPositions = require('../letterPositions');
const assertArrayEquals = require('../assertArrayEqual');

describe('#letterPositions', () => {
  it('should return the correct postions for the string "hello"', () => {
    const helloPositions = letterPositions('hello');

    expect(assertArrayEquals(helloPositions.h,[0])).to.be.true;
    expect(assertArrayEquals(helloPositions.e,[1])).to.be.true;
    expect(assertArrayEquals(helloPositions.l,[2,3])).to.be.true;
    expect(assertArrayEquals(helloPositions.l,[2,3])).to.be.true;
    expect(assertArrayEquals(helloPositions.o,[4])).to.be.true;
  });

  it('should return the correct postions for the string "lighthouse in the house"', () => {
    const lightHousePositions = letterPositions('lighthouse in the house');

    expect(assertArrayEquals(lightHousePositions.l,[0])).to.be.true;
    expect(assertArrayEquals(lightHousePositions.e,[9,16,22])).to.be.true;
    expect(assertArrayEquals(lightHousePositions.t,[4,14])).to.be.true;
  });
})






