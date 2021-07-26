const { welcome, goodbye, tell } = require("../utils/fortune-teller");

function getFortune(question) {
  arr = []
  errMsg = "There was an error: "
  const tellPromise = tell(question)
 return tellPromise
  .then((result) => {
    arr.push(`Your question was: ${question}`);
    arr.push(`Your fortune is: ` + result)
    return arr
  })
  .catch((response) => {
   return  errMsg + response
  })
}

function fullSession(question) {
  errMsg = "There was an error: A question is required..."
  arr = []
  welcome()
  .then((message)=> {
    arr[0] = (message)
  })
  const tellPromise = tell(question)
  tellPromise
  .then((result) => {
    arr.push(`Your question was: ${question}`);
    arr.push(`Your fortune is: ` + result)
  })
  .catch((response) => {
    errMsg = errMsg + response
})
if(!question) {
  arr[1] = (errMsg)
} 

goodbye()
  .then((bye)=> {
    arr.push(bye)
  } )
return arr
}

module.exports = { getFortune, fullSession };
