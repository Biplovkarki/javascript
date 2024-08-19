function add(x,y){
    const d= x+y;
  return d;

}
const e = add(2,3);
const f = add(2,5);
 console.log("the sum of numbers:"+e);
 console.log("the sum of numbers:"+f);


 const subtract= (x,y) => {
    return x-y;

 }
 let j=subtract (5,1);
 console.log(`subtract of two numbers : ${j}`);

  personal=(name) => {
         return name;
 }

 console.log("your name:"+personal("suka"));
 //...rest operators
const printArgs = (...args) => {
    console.log(args);
}
printArgs("hi");
printArgs("hi","hello");
printArgs("hi","hewkfhi","jsnaj");
printArgs("hi","hewkfhi",1,2,true,undefined,null);