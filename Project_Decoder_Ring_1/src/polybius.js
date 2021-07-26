// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    const alphabet =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
  
  const numbers = ['11', '21', '31', '41', '51', '12', '22', '32', '42', '42', '52', '13', '23', '33', '43', '53', '14', '24', '34', '44', '54', '15', '25', '35', '45', '55',];
    let result = ''
   input = input.toLowerCase()
    console.log(input);
    if(encode) {
      for(let item of input) {
        let index = alphabet.indexOf(item)
        if(index === -1) {
          result += item
        } else {
          result += numbers[index]
        }
      }
    } else {
      let newInput =input.split(' ').join('')
      if(newInput.length % 2 != 0) {
      return false
    }
      for(let i=0; i < input.length; i = input[i] === ' '? i+1:  i+2 ) {
        const fullNumber =  input[i]+input[i+1]
        
        let index = numbers.indexOf(fullNumber)
        if(index === -1) {
          result += input[i]
        } else {
          result += fullNumber === '42'? '(i/j)': alphabet[index]
        }
      }
    }
    return result
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
