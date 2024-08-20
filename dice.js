
let random;
let count=1;

do{
    console.log(random);
    random = Math.floor(Math.random() *6+1);
    count++;

}while (random !==6);
console.log("it took",count,"times");
