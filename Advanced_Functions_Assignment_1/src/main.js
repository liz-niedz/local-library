/*
  Complete the functions below as described in the instructions.

  The `parks` parameter refers to an array of objects with the following shape:
  {
    id: 1,
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: { state: "Maine" },
  }

  The `users` parameter refers to an object with the following shape:
  {
    "karah.branch3": {
      visited: [1],
      wishlist: [4, 6],
    }
  }
*/

function getParksByState(parks, state) {
let result = parks.reduce((acc, park) => {
  if(park.location.state === state){
    acc.push(park)
  }
return acc
}, [])
return result
}

function getWishlistParksForUser(parks, users, name) {
  return parks.filter((user)=> users[name].wishlist.includes(user.id))
}

function userHasVisitedAllParksInState(parks, users, state, name) {
  let userVisited = users[name].visited // equals visited array of users visted list
  let parksState = parks.reduce((acc, park)=> {
    if(park.location.state === state) {
      acc.push(park.id)
    }
    return acc
  },[]) // equals array of ids from certain state
  console.log(parksState)
  console.log(userVisited)
  return userVisited.some((item)=> userVisited.includes(parksState[0] && parksState[1]))
}

function userHasVisitedParkOnWishlist(users, nameA, nameB) {
  let userVisit = users[nameA].visited
  let userWish = users[nameB].wishlist
  //console.log(userVisit)
  //console.log(userWish)
  return userVisit.every((item)=> userVisit.includes(userWish[0]))
}

function getUsersForUserWishlist(users, name) {
  let namesWish = users[name].wishlist
  let usernames = Object.keys(users)
  return usernames.filter((user) => {
    return users[user].visited.some(park => namesWish.includes(park))
  })
}

module.exports = {
  getParksByState,
  getWishlistParksForUser,
  getUsersForUserWishlist,
  userHasVisitedAllParksInState,
  userHasVisitedParkOnWishlist,
};
