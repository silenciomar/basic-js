const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let stack = [];
  let objDNS = {};

  for (let i = 0; i < domains.length; i++) {
    let reverseDomainsArr = domains[i].split('.').reverse();
    let domain = '';

    for (let k = 0; k < reverseDomainsArr.length; k++) {
      domain = domain + `.${reverseDomainsArr[k]}`;
      stack.push(domain)
    }
  }
  return stack.reduce((acc, el) => {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, objDNS);
}

module.exports = {
  getDNSStats
};
