// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
const alpha = 'abcdefghijklmnopqrstuvwxyz';;
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    let result = ''
    if(!alphabet || alphabet.length != 26) {
      return false
    }
    const unique =  Array.from(new Set(alphabet.split('')))
    if(unique.length != alphabet.length){
      return false
    }
    input = input.toLowerCase()
    if(encode === true) {
      for(let item of input) {
        let index = alpha.indexOf(item)
        if(index === -1) {
          result += item
        } else  {
          result += alphabet[index]
        } 
      }
    } else {
       for(let item of input) {
      let index = alphabet.indexOf(item)
        if(index === -1) {
          result += item
        } else {
          result += alpha[index]
        }
      }
    }
return result
  }
                            
   return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

