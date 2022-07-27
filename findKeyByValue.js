const assertEqual = function(actual, expected) {

  if (actual !== expected) {
    console.log(`Asserion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
};

const findKeyByValue = (obj,title) => {
  //search through all keys
  let keys = Object.keys(obj);
  //for of to loopthrough keys
  for (let key of keys) {
    //if the value equals title than return that object 
    if(obj[key] === title){
      return key;
    }
  }

  //console.log(keys)
  //return the key when you find it
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"))
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
