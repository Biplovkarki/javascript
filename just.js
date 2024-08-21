/*Create an array of objects where each object represents an item in a shopping
cart. Each item should have properties like productName , quantity , and pricePerUnit .
Write a function that calculates the total cost of the items in the cart.
*/
 const shop_cart=[
  {
    name: "banana",
    quantity:1,
    price:150

  },
  {
    name: "nhhjvjhv",
    quantity:3,
    price:150

  },
  {
    name: "bjjiu",
    quantity:1,
    price:250

  },
  {
    name: "bjjidgwquguiiu",
    quantity:2,
    price:150

  }
 ];

//  function calculate (cart){
//     let totalcost=0;
//     for( let item of cart){
//         totalcost += item.quantity * item.price;
//     }
//     return totalcost;
//  }
//  const totalcost = calculate(shop_cart);
// console.log(`Total cost of items in the cart: Rs.${totalcost}`);

let totalcost=0;
shop_cart.forEach((item) =>{
 totalcost= totalcost +( item.quantity * item.price);
});

console.log(`Total cost of items in the cart: Rs.${totalcost}`);

// let totalcost=0;
// shop_cart.map((item) =>{
//  totalcost= totalcost +( item.quantity * item.price);
//  return totalcost;
// })

// console.log(`Total cost of items in the cart: Rs.${totalcost}`);