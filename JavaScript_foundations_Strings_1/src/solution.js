/*
  Complete the function below according to the instructions.
  
  When the function's parameters reference `products`, they are referencing an array of objects. Each object has the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
*/

function listAllItems(products) {
  let holderList = []
  let result;
  let number = products.length;
  for(let i=0; i < products.length; i++) {
    let name = products[i].name
    holderList.push(name); // [shirt, shoes, hat]
    }
    if (products.length > 2) {
      // if length is greater then 1
      // `There is ${result.length} item for sale result.join(', ').`
      result = `There are ${number} items for sale: ${holderList.join(", ")}.`;
    }
    if (products.length === 2) {
      //if length is exactly 2
      result = `There are ${number} items for sale: ${holderList.join(" and ")}.`
    }
    if (products.length === 1) {
      //if length is exactly 1
      result = `There is ${number} item for sale: ${holderList.join(" ")}.`
    }
    if(products.length === 0) {
      //if length is exactly 1
      result = 'There are no items for sale.'
    }
    return result
    }
    
  

 

module.exports = {
  listAllItems,
};
