"use strict";
// Task #1 
function arraySplice(array, index, value) {
    array.splice(index, 0, value);
    return array;
}
var modified = arraySplice([1, 2, 3, 4, 5, 6], 2, 12);
console.log(modified);
let cart = [];
function addItem(item, quantity) {
    cart.push({ item, quantity });
    console.log("Item added to cart:", item);
    printCart();
}
function removeItem(item) {
    let index = findItemIndex(item);
    if (index !== -1) {
        cart.splice(index, 1);
        console.log("Item removed from cart:", item);
    }
    else {
        console.log("Item not found in cart:", item);
    }
    printCart();
}
function updateQuantity(item, newQuantity) {
    let index = findItemIndex(item);
    if (index !== -1) {
        cart[index].quantity = newQuantity;
        console.log("Quantity updated for item:", item);
    }
    else {
        console.log("Item not found in cart:", item);
    }
    printCart();
}
function findItemIndex(item) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].item === item) {
            return i;
        }
    }
    return -1;
}
function printCart() {
    console.log("Cart contents:");
    for (let i = 0; i < cart.length; i++) {
        console.log(cart[i].item + " - Quantity: " + cart[i].quantity);
    }
    console.log("-----------------");
}
addItem("Apple", 3);
addItem("Orange", 12);
printCart();
// Task 3: Print the first 25 integers using a while loop
var i = 1;
while (i <= 25) {
    console.log(i);
    i++;
}
// Task 4: Print the first 10 even numbers using a while loop
var i = 2;
var count = 0;
while (count < 10) {
    console.log(i);
    i += 2;
    count++;
}
