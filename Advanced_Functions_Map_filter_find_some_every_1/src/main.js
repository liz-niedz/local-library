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

function findParkByName(parks, name) {
 let found = parks.find((park) => park.name === name)
 return found
}

function allParksAboveCertainSize(parks, minSize) {
  let sizes = parks.every((park) => park.areaInSquareKm > minSize)
  return sizes
}

function getBigParkNames(parks, minSize) {
  let filter = parks.filter((park) => park.areaInSquareKm >= minSize)
  let names = filter.map((park) => park.name)
  return names
}

function doesStateHaveOneBigPark(parks, minSize, state) {
  let filter = parks.filter((park) => park.areaInSquareKm >= minSize)
  let some = filter.some((park) => park.location.state === state) 
  return some
}

module.exports = {
  findParkByName,
  allParksAboveCertainSize,
  getBigParkNames,
  doesStateHaveOneBigPark,
};
