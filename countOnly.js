// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function(allItems, itemsToCount) {
  //return object that countains all stats
  const results = {}

  for (const item of allItems) {
    //console.log(item);
    if(itemsToCount[item]) {
      if(results[item] ) {
        results[item] ++;
      }else {
        results[item] = 1 
      }

    }
  }

  return results;
}

module.exports = countOnly;
