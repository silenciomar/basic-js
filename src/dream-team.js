const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members) === false) {
    return false;
  }
  let realTeamMembers = members.filter((word) => typeof word === 'string');
  let teamName = [];
  realTeamMembers.map((memberName) => {
    memberName = memberName.trim().toUpperCase();
    teamName.push(memberName[0]);
  });
  return teamName.sort().join('');
}

module.exports = {
  createDreamTeam
};
