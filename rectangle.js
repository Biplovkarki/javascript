/*Write a function called calculateRectangleArea that takes two parameters: 
width and height . The function should return the area of the rectangle. Call
the function with different values and display the results.*/
// Function to calculate the area of a rectangle
function calculateRectangleArea(width, height) {
    // Calculate the area
    return width * height;
}

// Call the function with different values and display the results
const width1 = 5;
const height1 = 10;
console.log(`The area of a rectangle with width ${width1} and height ${height1} is ${calculateRectangleArea(width1, height1)}.`);

const width2 = 7;
const height2 = 3;
console.log(`The area of a rectangle with width ${width2} and height ${height2} is ${calculateRectangleArea(width2, height2)}.`);

const width3 = 15;
const height3 = 8;
console.log(`The area of a rectangle with width ${width3} and height ${height3} is ${calculateRectangleArea(width3, height3)}.`);


