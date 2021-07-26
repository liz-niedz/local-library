/*
  Write a function that separates students into two buckets based on a given score. The end result for the "happy path" should be an array with two arrays inside of it.
*/

function partitionStudentsByScore(students, score) {
  if(students.length === 0) {
    return [[], []]
  }
 let result = []
 const arr1 = students.filter((student)=> student.score <= score)
 const arr2 = students.filter((student)=> student.score > score)
 result.push(arr1, arr2)
 return result
}

module.exports = partitionStudentsByScore;
