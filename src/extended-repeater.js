const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let { separator, addition, additionSeparator } = options || {};
  let repeatTimes = options.repeatTimes || 1;
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let resultStack = [];
  let additionResult = '';

  for (let i = 0; i < repeatTimes; i++) {
    resultStack.push(str);
  }

  if (separator === undefined) separator = '+';

  
  if (typeof addition !== 'undefined') {
    let additionStr = String(addition);
    let additionSeparatorStr = additionSeparator || '|';
    let additionArray = [];
    
    for (let i = 0; i < additionRepeatTimes; i++) {
      additionArray.push(additionStr);
    }
    
    additionResult = additionArray.join(additionSeparatorStr);
  }

  return resultStack.map(item => item + additionResult).join(separator);
}

module.exports = {
  repeater
};
