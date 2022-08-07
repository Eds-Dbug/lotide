const {expect} = require("chai");
const eqObjects = require("../eqObjects");

describe('#eqObjects', () => {
  it ('should return true for { a: "1", b: "2" } and { b: "2", a: "1" }', ()=> {
    // const ab = { a: "1", b: "2" };
    // const ba = { b: "2", a: "1" };
    expect(eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" })).to.be.true; // => true
  })

  it('should return false for { a: "1", b: "2" } and { a: "1", b: "2", c: "3" }', () => {
    expect(eqObjects({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" })).to.be.false; // => false
  })

  it('should return true for { c: "1", d: ["2", 3], w:1 } and { d: ["2", 3], c: "1", w:1}', () => {
    expect(eqObjects({ c: "1", d: ["2", 3], w:1 }, { d: ["2", 3], c: "1", w:1})).to.be.true; // => true
  })

  it('should return false for { c: "1", d: ["2", 3], w:1 } and { c: "1", d: ["2", 3, 4] }', () => {
    expect(eqObjects({ c: "1", d: ["2", 3], w:1 }, { c: "1", d: ["2", 3, 4] })).to.be.false; // => false
  })

  it('should return true for { a: { z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }', () => {
    expect(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })).to.be.true // => true
  })

  it('should return false for { a: { y: 0, z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }', () => {
    expect(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })).to.be.false // => false
  })

  it('should return false for { a: { y: 0, z: 1 }, b: 2 } and { a: 1, b: 2 }', () => {
    expect(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })).to.be.false // => false
  })
})











