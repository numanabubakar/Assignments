
// Task #1 

function arraySplice(array:number[], index:number, value:number) {
    array.splice(index, 0, value);
    return array;
  }

  var modified = arraySplice([1,2,3,4,5,6],2,12);
  console.log(modified)

// Task #2
interface CartItem {
  item: string;
  quantity: number;
}

let cart: CartItem[] = [];

function addItem(item: string, quantity: number): void {
  cart.push({ item, quantity });
  console.log("Item added to cart:", item);
  printCart();
}

function removeItem(item: string): void {
  let index = findItemIndex(item);
  if (index !== -1) {
    cart.splice(index, 1);
    console.log("Item removed from cart:", item);
  } else {
    console.log("Item not found in cart:", item);
  }
  printCart();
}

function updateQuantity(item: string, newQuantity: number): void {
  let index = findItemIndex(item);
  if (index !== -1) {
    cart[index].quantity = newQuantity;
    console.log("Quantity updated for item:", item);
  } else {
    console.log("Item not found in cart:", item);
  }
  printCart();
}

function findItemIndex(item: string): number {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].item === item) {
      return i;
    }
  }
  return -1;
}

function printCart(): void {
  console.log("Cart contents:");
  for (let i = 0; i < cart.length; i++) {
    console.log(cart[i].item + " - Quantity: " + cart[i].quantity);
  }
  console.log("-----------------");
}



addItem("Apple",3);
addItem("Orange",12);
printCart()


// Task 3: Print the first 25 integers using a while loop


var i: number = 1;
while (i <= 25) {
  console.log(i);
  i++;
}


// Task 4: Print the first 10 even numbers using a while loop


var i: number = 2;
var count: number = 0;
while (count < 10) {
  console.log(i);
  i += 2;
  count++;
}
// Task 5: Calculate the factorial of a positive integer using a while loop


function calculateFactorial(num: number): number {
  var factorial: number = 1;
  var i: number = 1;
  while (i <= num) {
    factorial *= i;
    i++;
  }
  return factorial;
}

var f = calculateFactorial(3)
console.log(f);
// Task 6: Remove negative numbers from an array


function removeNegativeNumbers(numbers: number[]): void {
  var i: number = 0;
  while (i < numbers.length) {
    if (numbers[i] < 0) {
      numbers.splice(i, 1);
    } else {
      i++;
    }
  }
}

removeNegativeNumbers([1,2,3,4,-4,-6,21,10])


// Task 7: Calculate the sum of all numbers in an array using a while loop


function calculateSum(numbers: number[]): number {
  var sum: number = 0;
  var i: number = 0;
  while (i < numbers.length) {
    sum += numbers[i];
    i++;
  }
  return sum;
}

var sum = calculateSum([1,2,3,4,5,6,7]);
console.log(sum);
// Task 8: Convert Celsius temperatures to Fahrenheit using a while loop


var temperaturesInCelsius: number[] = [25, 30, 15, 20];
var convertedTemperature: number[] = [];
var i: number = 0;
while (i < temperaturesInCelsius.length) {
  var celsius: number = temperaturesInCelsius[i];
  var fahrenheit: number = (celsius * 9/5) + 32;
  convertedTemperature.push(fahrenheit);
  i++;
}
console.log("Converted temperatures:", convertedTemperature);

