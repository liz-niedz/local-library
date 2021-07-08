/*
  Write each function according to the instructions.
  
  When a function's parameters reference `cart`, it references an object that looks like the one that follows.
  {
    "Gold Round Sunglasses": { quantity: 1, priceInCents: 1000 },
    "Pink Bucket Hat": { quantity: 2, priceInCents: 1260 }
  }
*/

function calculateCartTotal(cart) {
  let total = 0
  for(let itemName in cart){
   const item = cart[itemName]
   const price = item.priceInCents
   const quantity = item.quantity
   
  total = total + price * quantity
  }
  return total
}

function printCartInventory(cart) {
  let items = ""
//   for(let  name in cart) {
//     const name = Object.keys(cart)
//     const quantity = cart[itemName].quantity
//     items = `${quantity}${name.join("\n")}${quantity}`
//   }
  for(let name in cart) {
      const  { quantity }  = cart[name]
      console.log(quantity)
      items += `${quantity}x${name}\n`
  }
  return items
}
 


module.exports = {
  calculateCartTotal,
  printCartInventory,
};
