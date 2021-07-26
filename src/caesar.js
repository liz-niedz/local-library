// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    let result = ''
    const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
    if(shift === 0 || shift > 25 || shift < -25) {
      return false
    }
input = input.toLowerCase()
for(let item of input) {
  let index = alpha.indexOf(item)
  if(index === -1) {
    result += item
  }else {
   if(encode === false) {
    index = (index - shift + 26) %26
     result += alpha[index]
   } else{
 index = (shift + index + 26) %26
 result += alpha[index]
  }
 }
}
return result
  }

  return {
    caesar,
  };
})();

module.exports =  { caesar: caesarModule.caesar };

