
const flatten = (arr) => {
  let result = [];
  //check if each element is an array
  for(let item of arr) {
    //if its an array we need to put everything in that array into the result array
    if(Array.isArray(item)) {
      for(let element of item){
        result.push(element);
      }
    }else{
      //we put the normal elements in result array
      //return that result array
      result.push(item);
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

console.log(flatten([1, 2, [3, 4], 5, [6]]))