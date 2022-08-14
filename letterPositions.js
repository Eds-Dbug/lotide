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

module.exports = letterPositions;



