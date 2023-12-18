const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (Array.isArray(sampleActivity)) {
    return false;
  } else if (typeof sampleActivity !== 'string') {
    return false;
  }
   
  const halfLife = Math.LN2 / HALF_LIFE_PERIOD;
  sampleActivity = Number(sampleActivity);

  if (Number.parseFloat(sampleActivity) && sampleActivity < MODERN_ACTIVITY && sampleActivity > 0) {
    return Math.ceil((Math.log(MODERN_ACTIVITY/sampleActivity)) / (halfLife));
  } else {
    return false;
  }
}

module.exports = {
  dateSample
};
