/*Write a program that takes an age and checks if they are eligible to vote
(age 18 or older). If they are eligible, check if they are also eligible to run for
president (age 35 or older in the U.S.).*/
function checkEligibility(age) {
    if (age >= 18) {
        console.log("You are eligible to vote.");
        if (age >= 35) {
            console.log("You are also eligible to run for president.");
        } else {
            console.log("You are not eligible to run for president.");
        }
    } else {
        console.log("You are not eligible to vote.");
    }
}

// Example usage
//const age = prompt("Enter your age:");
checkEligibility(parseInt(15));
