const assertArrayEquals = require('../assertArrayEqual');

console.log(assertArrayEquals([1,2,3],[1,2,3]));
console.log(assertArrayEquals(["1", "2", "3"], ["1", "2", "3"]));
console.log(assertArrayEquals(["1", "2", "3"], ["1", "2", 3]));