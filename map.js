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
    console.log(`Asserion Failed: ${actual} !== ${expected}`);
    return false;
    process.exit();
  } else {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
    return true;
    process.exit();
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const callbck = function (item){
  return item;
}

map(words,callbck);


console.log(assertArrayEquals(map(words,callbck),["ground", "control", "to", "major", "tom"]));

