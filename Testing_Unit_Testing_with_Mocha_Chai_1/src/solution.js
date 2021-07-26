/*
  Write a function that returns a particular student's score when given a name. If no name matches, return `null`.
*/

function findStudentScoreByName(students, name) {
  let result = null
  for(let i = 0; i < students.length; i++) {
    if(students[i].name === name) {
      result = students[i].score
    }
  }
  return result
}
module.exports = findStudentScoreByName;
