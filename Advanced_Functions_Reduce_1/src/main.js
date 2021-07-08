/*
  Complete the functions below as detailed in the instructions.

  When one of the function parameters refers to a `park`, assume it is an object of the following shape:
  {
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: {
      state: "Maine"
    }
  }
*/

function squareKmTotal(parks) {
  let accumulator = 0
  let result = parks.reduce((acc, park, index) => {
    console.log(`acc: ${acc}` , `area: ${park.areaInSquareKm}`)
   return acc += park.areaInSquareKm
  }, accumulator)
  return result
}

function parkNameAndState(parks) {
  let result = parks.reduce((acc, park) => {
    acc[park.name] = park.location.state
    return acc
  }, {})
  return result

}

function parkByState(parks) {
  
  let result = parks.reduce((acc, park) => {
    acc[park.location.state] = park.name
    return acc
  }, {})
  return result
}

module.exports = { squareKmTotal, parkNameAndState, parkByState };
