const eqArrays = require('../eqArrays');
const {expect} = require('chai');

describe('#eqArrays', () => {
  it('should return true for ["1", "2", "3"] and ["1", "2", "3"]', () => {
    expect(eqArrays(["1", "2", "3"], ["1", "2", "3"])).to.be.true;
  })

  it('should return false for ["1", "2", "3"] and ["1", "2", 3]', () => {
    expect(eqArrays(["1", "2", "3"], ["1", "2", 3])).to.be.false;
  })

  it('should return true for [1, 2, 3] and [1, 2, 3]', () => {
    expect(eqArrays([1, 2, 3], [1, 2, 3])).to.be.true
  })

  it('should return true for [[2, 3], [4]] and [[2, 3], [4]]', () => {
    expect(eqArrays([[2, 3], [4]], [[2, 3], [4]])).to.be.true
  })

  it('should return false for [[2, 3], [4]] and [[2, 3], [4, 5]]', () => {
    expect(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])).to.be.false
  })

  it('should return false for [[2, 3], [4]] and [[2, 3], 4]', () => {
    expect(eqArrays([[2, 3], [4]], [[2, 3], 4])).to.be.false
  })
})


// => true

 // => false
 // => false
