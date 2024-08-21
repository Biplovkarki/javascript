const product ={
    name:"laptop",
    bulkPricinig:[
        {
            minQuantity:10,
            pricePerUnit:10,
            maxQuantity:19,
        },
         {
            minQuantity:20,
            pricePerUnit:50,
            maxQuantity:29,
        }
    ],
};
function calculateTotalPrice(quantityPurchased){
    const pricingModelPurchased =product.bulkPricinig.find((pricing)=>{
        return quantityPurchased>=pricing.minQuantity && quantityPurchased<=pricing.maxQuantity;
    });
    return quantityPurchased *pricingModelPurchased.pricePerUnit;
}
console.log(calculateTotalPrice(10));
console.log(calculateTotalPrice(12));
console.log(calculateTotalPrice(15));
console.log(calculateTotalPrice(20));
console.log(calculateTotalPrice(25));