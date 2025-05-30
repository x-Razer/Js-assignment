//lab 1

let age = prompt("Enter your age:");
age = Number(age);

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

//lab 2

let number = prompt("Enter a number:");
number = Number(number);

if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

//lab 3

let username = prompt("Enter username:");
let password = prompt("Enter password:");

if (username === "admin" && password === "1234") {
  console.log("Login successful");
} else {
  console.log("Invalid credentials");
}

//lab 4

let score = prompt("Enter your score:");
score = Number(score);

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}

//lab 5

let isMember = prompt("Are you a member? (true/false):");
let cartTotal = prompt("Enter cart total:");
isMember = (isMember === "true");
cartTotal = Number(cartTotal);

if (isMember || cartTotal > 100) {
  console.log("Discount applied");
} else {
  console.log("No discount");
}

//lab 6 

let num = prompt("Enter a number:");
num = Number(num);

if (num >= 10 && num <= 50) {
  console.log("Number is in range");
} else {
  console.log("Out of range");
}
