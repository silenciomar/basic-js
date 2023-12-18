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
function encodeLine(/* str */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // let stack = [];
  // let count = 0;
  // for (let i = 0; i < str.length; i++) {
  //   let letter = str[i];
  //   let r = str.split(letter).length - 1;
  //   stack.push(r, letter)
  // }
  // return stack;
}

module.exports = {
  encodeLine
};
