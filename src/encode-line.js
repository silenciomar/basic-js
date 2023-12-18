const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let stack = [];
  let count = 1;

  if (str.length === 0) {
    return '';
  }
  
  for (let i = 0; i < str.length; i += 1) {
    let letter = str[i];
    if (str[i] === str[i + 1]) {
      count += 1;
    } else {
      stack.push(count > 1 ? count : '', letter);
      count = 1;
    }
  }
  return stack.join('');
}

module.exports = {
  encodeLine
};
