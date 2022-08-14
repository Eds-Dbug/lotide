const flatten = (arr) => {
  let result = [];
  //check if each element is an array
  for(let item of arr) {
    //if its an array we need to put everything in that array into the result array
    if(Array.isArray(item)) {
      for(let element of item){
        result.push(element);
      }
    }else{
      //we put the normal elements in result array
      //return that result array
      result.push(item);
    }
  }
  return result;
}

