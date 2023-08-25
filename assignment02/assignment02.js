"use strict";
// 1. Develop a program that calculates and prints the sum of the first n even numbers using a for loop
function sumOfEvenNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += 2 * i;
    }
    return sum;
}
const n = 5;
const sum = sumOfEvenNumbers(n);
console.log(`The sum of the first ${n} even numbers is: ${sum}`);
