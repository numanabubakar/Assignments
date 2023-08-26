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
// 4. Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
function calculateArea(radius) {
    const area = 3.14 * (radius * radius);
    return area;
}
const radius = 5;
const area = calculateArea(radius);
console.log(`The area of the circle is: ${area}`);
// 5. Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
const grades = [80, 90, 40, 60, 50, 75, 30, 70];
for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 50) {
        grades.splice(i, 1);
    }
}
console.log("Passing grades:", grades);
//6 Write a program that uses a function to find the largest element in an array of numbers.
function findLargest(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbersArr.length; i++) {
        if (numbersArr[i] > largest) {
            largest = numbersArr[i];
        }
    }
    return largest;
}
const numbersArr = [10, 5, 20, 8, 15];
const largestNumber = findLargest(numbersArr);
console.log("The largest number is:", largestNumber);
