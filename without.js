// The internal comparison abstract operation SameValueZero(x, y), where x and y are ECMAScript language values, produces true or false. Such a comparison is performed as follows:

//     If Type(x) is different from Type(y), return false.
//     If Type(x) is Number, then
//         If x is NaN and y is NaN, return true.
//         If x is +0 and y is -0, return true.
//         If x is -0 and y is +0, return true.
//         If x is the same Number value as y, return true.
//         Return false.
//     Return SameValueNonNumber(x, y). 

// Note

// SameValueZero differs from SameValue only in its treatment of +0 and -0.

const without = function(source, itemsToRemove) {
  let result = source;
  //console.log('result:' + result)
  for(let i = 0; i < itemsToRemove.length; i++) {
    for(let j = 0; j < source.length; j++) {
      //console.log("asserts:" + assertEqual(itemsToRemove[i],source[j]))
      if(assertEqual(itemsToRemove[i],source[j])){
        result.splice(j,1);
      }
     // console.log("result" + result)
    }
  }

  return result;
}

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

console.log(without([1, 2, 3], [1]));
console.log(without([1, 2, 3], [1,2]));
console.log(without([1, 2, 3], [1,2,3]));

console.log(without(["1", "2", "3"], [1, 4, "3"]))
console.log(without(["1", "2", "3"], [1, 2, "3"]))

const words = ["hello", "world", "lighthouse"];
const words2 = [1,2,3,4];
without(words2,[4])
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArrayEquals(words, ["hello", "world", "lighthouse"]));
console.log(assertArrayEquals(words2, [1,2,3]));
