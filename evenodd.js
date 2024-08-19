/*Write a program that prints all the even and odd numbers from 1 to 50 using
a for loop. Use an if-else statement inside the loop to check whether the
number is even or odd.*/
// Print all even numbers from 1 to 50
console.log("Even numbers from 1 to 50:");
for (let num = 1; num <= 50; num++) {
    if (num % 2 === 0) {
        console.log(num);
    }
}

// Print all odd numbers from 1 to 50
console.log("Odd numbers from 1 to 50:");
for (let num = 1; num <= 50; num++) {
    if (num % 2 !== 0) {
        console.log(num);
    }
}

