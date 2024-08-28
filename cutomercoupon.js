const cartItems = [
    {
        productName: "Laptop",
        priceperunit: 50000,
        quantity: 5,
    },
    {
        productName: "mouse",
        priceperunit: 10000,
        quantity: 10,
    }
];

const coupons = [
    { code: "SALE", discount: 0.1 },
    { code: "DASHAIN", discount: 0.4 },
];

const customerType = [
    { type: "regularType", discountper: 0.2 },
    { type: "platinumType", discountper: 0.4 },
];

function calculateDiscount(Ctype, code) {
    const totalCost = cartItems.reduce((previousValue, currentItem) => {
        return previousValue + currentItem.priceperunit * currentItem.quantity;
    }, 0);

    // Apply customer type discount
    let customer = customerType.find((type) => {
        return Ctype == type.type;
    });
    let discountedAmount = 0;
    if (customer) {
        discountedAmount = totalCost * customer.discountper;
    }
    let netAmount = totalCost - discountedAmount;

    // Apply coupon discount
    const discountCoupon = coupons.find((coupon) => {
        return code == coupon.code;
    });
    if (discountCoupon) {
        const couponDiscountAmount = netAmount * discountCoupon.discount;
        netAmount -= couponDiscountAmount;
    }

    return netAmount;
}

// Example usage:
console.log(calculateDiscount("platinumType", "SALE")); // Calculates total with platinumType customer and SALE coupon
console.log(calculateDiscount("regularType", "DASHAIN")); // Calculates total with regularType customer and DASHAIN coupon
console.log(calculateDiscount("regularType", "INVALID")); // Calculates total with regularType customer and an invalid coupon code
console.log(calculateDiscount("", "DASHAIN")); // Calculates total without a valid customer type but with a coupon
