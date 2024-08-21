/*Write a function that takes an object representing an order and a discount
percentage. The order object should have properties like orderTotal and discount .
The function should apply the discount to the orderTotal and return the updated
order object.
 */

const order ={
    orderTotal: 2000
  
}
const discount=10;//percentage
function calculateDiscountcost (){
 let discountPrice = order.orderTotal*discount/100;
 let totalOrderPrice = order.orderTotal -discountPrice;
 order.discount = discountPrice;
 return totalOrderPrice;
}

console.log(calculateDiscountcost());

order.orderTotal=calculateDiscountcost();
console.log(order);

//-------------------------------------------
// function applyDiscount(order, discountPercentage) {
//     // Calculate the discount amount
//     const discountAmount = order.orderTotal * (discountPercentage / 100);
    
//     // Subtract the discount from the order total
//     order.orderTotal -= discountAmount;

//     // Optionally, store the discount amount or percentage in the order object
//     order.discount = discountAmount;

//     // Return the updated order object
//     return order;
// }

// // Example usage
// const order = {
//     orderTotal: 1000,  // Initial total amount of the order
// };

// const discountPercentage = 15;  // 15% discount

// // Apply the discount
// const updatedOrder = applyDiscount(order, discountPercentage);

// // Print the updated order object
// console.log(updatedOrder);