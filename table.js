//write a program that generates and displays the multiplication table for a number. The table should show multiplication from 1 to 10.
const number = 1;

if (!isNaN(number)) {
    console.log(`Multiplication Table for ${number}:`); 
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
} else {
    console.log('Please enter a valid number.');
}
