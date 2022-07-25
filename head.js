const assertEqual = function(actual, expected) {

  if (actual !== expected) {
    console.log(`Asserion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
};

const head = function(array) {
  if(array.length > 0){
    return array[0];
  }
  return array;
}

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head([3,5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
