const assertEqual = function(actual, expected) {

  if (actual !== expected) {
    console.log(`Asserion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
};

const findKey = (object, callback) => {
  let keys = Object.keys(object);
  //console.log(keys)
  //loop through object keys 
  for (let key of keys) {
    //console.log(key)
    //if the inner value matches to condition return the outer key 
    //put the value of inside callback
    //console.log(callback(object[key]))
    if(callback(object[key])){
      //console.log(key)
      return key;
    }
  }
}

const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

console.log(`result is: ${result}`);
assertEqual(result,'noma');