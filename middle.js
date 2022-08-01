const middle = (arr) => {
  let result = []
  const len = arr.length;
  //calculate middle
  const middle = Math.floor(len/2);
  //console.log('middle:',middle)
  //check length of arr if 1, or 2 in len
  //check if length of arr is odd
  //if arr even len  then
  if(len === 1 || len === 2) {
    //return empty if  len 1 or 2
    return [];
  } else if (len % 2 === 1) {
    //return the middle element
    result.push(arr[middle]);
  } else if (len % 2 === 0) {
    // return middle two elements
    result.push(arr[middle - 1]);
    result.push(arr[middle]);
  }
  return result;
}

module.exports = middle;




