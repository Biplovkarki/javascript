let num1=0;
let num2=1;
let next;
let  count=0;
console.log(num1);
console.log(num2);
while(count<10){
    next=num1+num2;
    num1=num2;
    num2=next;
    console.log(next);
    count ++;

}
