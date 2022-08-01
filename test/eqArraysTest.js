const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual')

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// => true
// => false
