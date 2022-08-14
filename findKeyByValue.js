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
}

module.exports = findKeyByValue;


