const assertEqual = function(actual, expected) {

  if (actual !== expected) {
    console.log(`Asserion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
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

const eqObjects = (object1, object2) => {
  let numKeys1 = Object.keys(object1).length;
  let numKeys2 = Object.keys(object2).length;

  if (numKeys1 !== numKeys2) {
    //console.log('false\n');
    return false;
  }

  for (let key of Object.keys(object1)) {
    //console.log('object1 key:', object1[key]);
    //console.log('object2 key:', object2[key])
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key],object2[key])) {
        //console.log('false\n');
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        //assertEqual(object1[key],object2[key]);
        //console.log('false\n');
        return false;
      }
    }
    //end for
  }
  //console.log('true');
  //assertEqual(object1[key],object2[key])
  //console.log('true\n');
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;

  if(!eqObjects(actual,expected)) {
    console.log(`\u274C\u274C\u274C Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  if (eqObjects(actual,expected)) {
    console.log(`\u2705\u2705\u2705 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3], w:1 };
const dc = { d: ["2", 3], c: "1", w:1};
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false

 