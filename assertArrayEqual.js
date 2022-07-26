const assertArrayEquals = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (assertEqual(arr1[i], arr2[i]) === false) {
      return false;
    }
  }
  return true;
};

const assertEqual = function(actual, expected) {

  if (actual !== expected) {
    //console.log(`Asserion Failed: ${actual} !== ${expected}`);
    return false;
    process.exit();
  } else {
    //console.log(`Assertion Passed: ${actual} === ${expected}`);
    return true;
    process.exit();
  }
};

console.log(assertArrayEquals([1,2,3],[1,2,3]));
console.log(assertArrayEquals(["1", "2", "3"], ["1", "2", "3"]));
console.log(assertArrayEquals(["1", "2", "3"], ["1", "2", 3]));