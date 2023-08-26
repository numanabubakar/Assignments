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
// 2. Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}
// 3. Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers, leaving only the odd numbers.
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        numbers.splice(i, 1);
    }
}
console.log(numbers);
