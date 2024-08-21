let simpleArray= ["biplov","suka","prerana","anusha","kabin","manish"];
console.log(simpleArray);
console.log("_______________________");

//push elements in array
simpleArray.push("ravi");
console.log(simpleArray);
console.log("_______________________");

//poping last element of array

poppedElement =simpleArray.pop();
console.log("popped element is", poppedElement);
console.log("_______________________");

//it elements the first elements
simpleArray.shift();
console.log(simpleArray);
console.log("_______________________");

//it adds  elements at the first
simpleArray.unshift("johnny","sudarshan");
console.log(simpleArray);
console.log("_______________________");

//includes-returns true orfalse
const doesIncludeJohnny = simpleArray.includes("Johnny");
console.log("Includes Johnny?",doesIncludeJohnny);

const doesIncludepapa =simpleArray.includes("papa");
console.log("Includes papa?",doesIncludepapa);

console.log("_______________________");
//for-each
simpleArray.forEach(function (x){
    console.log(x);
});

console.log("_______________________");

let nayaString ="";
simpleArray.forEach(function(x,i){ //x is the element, i is the index
    nayaString= nayaString +x +i;
});
console.log(nayaString);

console.log("_______________________");

const newArray=[1,2,6,4,8];
newArray.sort();
console.log(newArray);

// let sorted=newArray.sort((a,b)=> a-b);
// console.log(sorted);


//mapped
const number =[1,2,3,4,5];
const mapped = number.map((x) =>{
    return x*x;
});
console.log(mapped);

//reduced
const sumOfArray =number.reduce((a,b) => {//a is the previous value,b is the currentvalue
    return a+b;
},0);// 0 isthe inital valuee
console.log(sumOfArray);
/*
 iteration 1: 0,1 (initial value and first element) 
  iteration 1: 1,2 (result of last return and next element) 
   iteration 1: 3,3 (result of last return and next element) 
     iteration 1: 10,5 (result of last return and next element) 

*/
console.log("___________find method____________");
 const found = number.find((a) =>{
    return a%2==0
 })
 console.log(found);