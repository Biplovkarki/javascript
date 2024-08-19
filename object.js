const myName ="biplov";
const Age= 22;
const myProfession="student";

const aboutMe={
    name:"biplov",
    age:22,
    myProfession:["Students","majdoor"],
    hair : {
        color : "black",
        straight : false,
    },
    isFree : (time) =>{
        if(time >10){
            return true;
        }else {
            return false;
        }
    }
};
console.log(aboutMe.name);
console.log(aboutMe.age);
console.log(aboutMe.hair.color);
console.log(aboutMe.isFree(12));

//mutation
//about me cannot be reassigned ,but its properties can be
aboutMe.age="30";
console.log(aboutMe.age);

aboutMe.hobbies = ["gaming"];
console.log(aboutMe.hobbies);

//deleting a property
console.log(aboutMe);
delete aboutMe.hair;
console.log(aboutMe.hair);