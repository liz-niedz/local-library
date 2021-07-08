function sortWords(words) {
  // your solution here
  words.sort((a, b) => 
  a.toLowerCase() < b.toLowerCase() ? -1 : 1
  )
  return words
}

function sortNumbers(numbers) {
  // your solution here
  numbers.sort((a, b) => a - b)
  return numbers
}

function largestFirst(numbers) {
  numbers.sort((a, b) => b - a)
  return numbers
  // your solution here
}

function sortFlowersByZone(flowers) {
  // your solution here
  flowers.sort((flowerA, flowerB) => flowerA.zone - flowerB.zone)
  return flowers
}

function sortByLength(strings) {
  // your solution here
  strings.sort((a, b) => a.length - b.length)
  return strings
}

module.exports = {
  sortWords,
  sortNumbers,
  largestFirst,
  sortFlowersByZone,
  sortByLength,
};
