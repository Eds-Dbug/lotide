const middle = (arr) => {
  let result = []
  const len = arr.length;
  //calculate middle
  const middle = Math.floor(len/2);
  //console.log('middle:',middle)
  //check length of arr if 1, or 2 in len
  //check if length of arr is odd
  //if arr even len  then
  if(len === 1 || len === 2) {
    //return empty if  len 1 or 2
    return [];
  } else if (len % 2 === 1) {
    //return the middle element
    result.push(arr[middle]);
  } else if (len % 2 === 0) {
    // return middle two elements
    result.push(arr[middle - 1]);
    result.push(arr[middle]);
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

console.log(middle([1]))
console.log(middle([1, 2]))
console.log(middle([1, 2, 3]))
console.log(middle([1, 2, 3, 4, 5]) )
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]) );

console.log(assertArrayEquals(middle([1, 2, 3]),[2]))