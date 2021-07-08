/*
  The following functions have various syntax errors in them. Fix the bugs to get the tests to pass!
  
  When any of the following function's parameters reference `product`, they are referencing an object with the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
*/

function getPriceInDollars(product = {},  { priceInCents = 0 } = product) { // if there is no priceInCents key or no profuct available, return 0
return "$" + (priceInCents / 100).toFixed(2); // converts price to a string with new price
  
 

}

// `size` is a number between 0 and 16.
function checkIfSizeIsAvailable({availableSizes = []} = {}, size = 0) { // should still work if there is no product or sizes
 for (let i = 0; i < availableSizes.length; i++) { //loops through the products
    if (availableSizes[i] === size) { //if a size in available sizes = size it's looking for return true
      return true;
    }
  }

  return false;
}


module.exports = { getPriceInDollars, checkIfSizeIsAvailable };
