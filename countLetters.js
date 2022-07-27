const countLetters = (sentence) => {
  //have a results object that will record all letters
  let result = {}
  //loop through each letter of sentence
  for(let letter of sentence) {
    //if it does than increase the value by 1
    //if a count doesnt exist yet create one and set it to one
    if(result[letter]) {
      result[letter] ++;      
    }else{
      result[letter] = 1;
    }
  }
  return result
}

const assertEqual = function(actual, expected) {

  if (actual !== expected) {
    console.log(`Asserion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
};

//console.log(`assertion: ${assertEqual(countLetters('HeLloo'),{H:})}`)
console.log(countLetters('countLetters'));
console.log(countLetters("lighthouse in the house"))