const assertEqual = function(actual, expected) {

  if (actual !== expected) {
    console.log(`Asserion Failed: ${actual} !== ${expected}`);
    process.exit();
  } else {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
    process.exit();
  }
};

const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// => true
// => false