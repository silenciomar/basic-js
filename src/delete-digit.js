const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let stack = [];
  let numberStr = n.toString();

  for (let i = 0; i < numberStr.length; i += 1) {
    let currentNumber = Number(numberStr.slice(0, i) + numberStr.slice(i + 1));

    stack.push(currentNumber);
  }

  return Math.max(...stack);
}

module.exports = {
  deleteDigit
};
