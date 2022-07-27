const letterPositions = function(sentence) {
  const results = {};
  //let newSentence = sentence.split(" ").join("");
  //console.log(newSentence)
  // logic to update results here
  //loop through the sentence and find indexes of each letter
  for (let i = 0; i< sentence.length; i++) {
    //if k:v doesnt exist add it and set it to empty array
    //if it does push it into the nested array of value
    if(sentence[i] !== " "){
      if(results[sentence[i]]){
        results[sentence[i]].push(i);
      }else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

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

console.log(letterPositions("lighthouse in the house"));
assertArrayEquals(letterPositions("hello").h,[0])
assertArrayEquals(letterPositions("hello").e,[1])
assertArrayEquals(letterPositions("hello").l,[2])
assertArrayEquals(letterPositions("hello").l,[3])
assertArrayEquals(letterPositions("hello").e,[4])


