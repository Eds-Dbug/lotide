const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const eqObjects = (object1, object2) => {
  let numKeys1 = Object.keys(object1).length;
  let numKeys2 = Object.keys(object2).length;

  if (numKeys1 !== numKeys2) {
    console.log('false\n');
    return false;
  }

  for (let key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key],object2[key])) {
        return false;
      }
    } else {
      console.log('object1[key]',object1[key])
      if (typeof object1[key] === 'object') {
        //if the nested item is an object than call eqObjects again else do nothing
        //if nested call false than return false
        if(!eqObjects(object1[key],object2[key])) {
            return false;
        }
      }
    }
    //end for
  }

  return true;
};

module.exports = eqObjects


 