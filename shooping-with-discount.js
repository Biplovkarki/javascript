const cartItems=[
    {
        productName:"Laptop",
        priceperunit:50000,
        quantity:5,
    },
    {
        productName:"mouse",
        priceperunit:10000,
        quantity:10,
    }
];
const coupons=[
    {
        code:"SALE",discount:0.1},
    {code:"DASHAIN",discount:0.4},
]
function calculateTotal(code){
    const totalcost=cartItems.reduce((previousValue,currentItem)=>{
        return previousValue+currentItem.priceperunit*currentItem.quantity
    },0);
    const discountCoupon=coupons.find((coupons)=>{
        return code==coupons.code
    });
    if(!discountCoupon){
        return "Invalid coupon code"
    }
    const discountAmount=totalcost*discountCoupon.discount;
    const netAmount=totalcost-discountAmount;
    return netAmount;
    
}
const totalAfterSale=calculateTotal("SALE");
console.log(totalAfterSale);
const totalAfterDashain=calculateTotal("DASHAIN");
console.log(totalAfterDashain);
const totalAfterInvalid = calculateTotal("bfgdyus");
console.log(totalAfterInvalid);