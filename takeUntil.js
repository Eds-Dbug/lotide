const takeUntil = function(array, callback) {
  let result = [];
  //loop through array elements
  //if callback true than stop 
  // else keep pushing onto result 
  for(let item of array){
    if(callback(item)){
      return result;
    }
    result.push(item)
  }
  return result
}

//takeUntil(x => console.log('hello'))

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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArrayEquals(results1,[ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArrayEquals(results2,[ "I've", 'been', 'to', 'Hollywood' ]);

/**
 * [ 1, 2, 5, 7, 2 ]
--
[ 'I\'ve', 'been', 'to', 'Hollywood' ]

 */