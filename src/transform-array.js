const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
*/
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  
  let newArr = [];
  
  arr.forEach((item, i) => {
    if(item === '--double-next') {
      item = arr[i + 1];
      newArr.push(item);
    } else if (item === '--double-prev') {
      item = arr[i - 1];
      newArr.push(item);
    } else if (item === '--discard-prev') {
      newArr.pop(arr[i - 1])
    } else if (item === '--discard-next') {
      if (i !== arr.length - 1) {
        arr.splice(i + 1, 1);
      }
    } else {
      newArr.push(item);
    }
  });

  return newArr;
}

module.exports = {
  transform
};
