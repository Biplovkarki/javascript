/*Create an array of objects representing products in an inventory. Each product
should have properties like name , price , category , and quantity . Write a function
that decreases the quantity of a product when it's purchased, and ensure the
quantity doesn't go below zero.*/

 const Inventory=[
    {
        name:"spray",
        price :200,
        category:"homeapplines",
        quantity:10,
        threshold:2,
        restockmaal:10,
    },
    {
        name:"laptop",
        price :150000,
        category:"electronics",
        quantity:5,
        threshold:2,
        restockmaal:10,
    }
 ];

 function purchase (name,num){
  
    const purchasedItem = Inventory.find((itemName) =>{
    
        return  name ==itemName.name ;
    });

    if(!purchasedItem){
        return "No Item available of that name.";
    }
    else if(purchasedItem.quantity>=num){
        console.log("Item purchased: ", name);  
       let remainningQuantity= purchasedItem.quantity -num;
       
       purchasedItem.quantity= remainningQuantity;
      return `purchased quantity: ${num}`;
    }
    else {
         return ("Brother, you  cannot purchase this item.");
    }
    

    
};
console.log(purchase("laptop",10));
console.log(purchase("spray",2));

console.log(Inventory);
    


