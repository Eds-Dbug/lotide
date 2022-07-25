const assertEqual = function(actual, expected) {

  if(actual !== expected) {
    console.log("Assertion failed")
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);