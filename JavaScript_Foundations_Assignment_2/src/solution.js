/*
  The following functions have various syntax errors in them. Fix the bugs to get the tests to pass!
  
  When any of the following function's parameters reference `products`, they are referencing an array full of objects with the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ],
     quantity: 0
   }
   
  When any of the following function's parameters reference `product`, they are referencing an object with the above shape.
*/

function printablePrice(priceInCents) {
  const amount = (priceInCents / 100).toFixed(2);
  return `$${amount}`;
}

function chooseItemByNameAndSize(products = {}, name, size) {
  let result = null;
  for(let i =0; i < products.length; i++) {
    let product = products[i]
    if(product.name === name && product.availableSizes.includes(size)) {
      result = product 
    }
  }
  return result
}


function addProductToCart({ name, priceInCents }, cart = {}) {
const item = cart[name] //name of item in cart
if(item) { // if there's already an item in the cart, add 1 to quantity 
  item.quantity++
} else{
 cart[name] = { priceInCents, quantity: 1 } //else add name,price and quantity of product to cart
}
 return cart
}
 

function calculateTotal(cart = {}) {
  let total = 0
 for(let name in cart) {
   const product = cart[name]
   const price = product.priceInCents
   const num = product.quantity
   total += price * num
 }
return total 
}

function printReceipt(cart) {
const total = calculateTotal(cart)
if(!total) return null //if there's no cart total return null
let result = ""
for(let name in cart) {
  const { quantity, priceInCents } = cart[name]
  const price = printablePrice(quantity*priceInCents) 
  result += `${quantity}x${name} - ${price}\n`
}
 return result + `Total: ${printablePrice(total)}`
 
}


module.exports = {
  chooseItemByNameAndSize,
  addProductToCart,
  calculateTotal,
  printReceipt,
};
