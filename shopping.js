/*Create an array of objects where each object represents an item in a shopping
cart. Each item should have properties like productName , quantity , and pricePerUnit .
Write a function that calculates the total cost of the items in the cart.
*/

const shopping_item=[
    {
     productName:'chips',
     quantity:4,
     pricePerUnit: 50
    },
    {
        productName:'soap',
        quantity:2,
        pricePerUnit: 40
       },
       {
        productName:'susages',
        quantity:2,
        pricePerUnit: 395
       }
]


function  calculateTotalCost(){
    let totalCost =0;
    shopping_item.forEach((item)=>{
     totalCost+= item.quantity * item.pricePerUnit;

    })
   return totalCost;
}
let totalprice = calculateTotalCost();
console.log(`The totalcost of the items in shopping cart is: Rs. ${totalprice}`);
 
function calculateTotalCostusingReduce() {
    const totalcost = shopping_item.reduce((previousValue, currentValue)=>{
        return previousValue +currentValue.pricePerUnit * currentValue.quantity
    },0);
    console.log("the total cost of items in cart :", totalcost);
}
calculateTotalCostusingReduce();
// console.log(`The totalcost of the items in shopping cart is: Rs. ${calculateTotalCost()}`);
///enhancs shopping cART
const coupon={
    code:"hello123",
    discountpercentage:30 //percentage
 }
 
 function calculatediscount(code){
    if (code === coupon.code){
        totalprice -= totalprice *coupon.discountpercentage/100;
        console.log(`the discounted price after using valid coupon code :${totalprice}`);
    }
    else{

        console.log("please !! enter valid coupon code");
    }

 }
calculatediscount("hebjllo123");