/*Write a program that acts as a simple calculator. Assign variables for two
numbers and an operation (add, subtract, multiply, divide). The program
then performs the selected operation and displays the result*/
let num1 = 10;
let num2 = 5;
let operation = 'divide'; 

function calculate(num1, num2, operation) {
    let result;
    
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                return 'Error: Division by zero is not allowed.';
            }else{
            result = num1 / num2;
            }
            break;
        default:
            return 'Error: Invalid operation.';
    }
    
    return result;
}

const result = calculate(num1, num2, operation);
console.log(`The result of ${operation}ing ${num1} and ${num2} is: ${result}`);
