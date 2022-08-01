const tail = function(array) {
  if (array.length > 0) {
    return array.slice(1,array.length);
  }
  return array;
};

module.exports = tail;

