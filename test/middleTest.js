const middle = require('../middle');
const assertArrayEquals = require('../assertArrayEqual')

console.log(middle([1]))
console.log(middle([1, 2]))
console.log(middle([1, 2, 3]))
console.log(middle([1, 2, 3, 4, 5]) )
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]) );

console.log(assertArrayEquals(middle([1, 2, 3]),[2]))