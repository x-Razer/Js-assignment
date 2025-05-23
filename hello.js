//Lab work 1

// Possibility 1
let x1 = 6;
let y1 = 4;
x1 += y1; // x1 is now 10
console.log("Possibility 1:", x1); // Output: 10

// Possibility 2
let x2 = 3;
let y2 = 7;
x2 += y2; // x2 is now 10
console.log("Possibility 2:", x2); // Output: 10

//Lab work 2

let p = 5;
let q = 3;

let result = (p > q) && (p <= q);
console.log(result); // Output: false
// Because both conditions can't be true at the same time

// So, definitively:
console.log("p is not equal to q:", p !== q); // Output: true


//Lab work 3

let value = 7;
value = String(value); // Now it's a string
console.log(value); // Output: "7"
console.log(typeof value); // Output: "string"


//Lab work 4

let num = 123;
console.log(typeof num); // Output: "number"
console.log(num + 5);    // Output: 128 (can do math)
console.log(num[0]);     // Output: undefined (not a character sequence)

let str = "123";
console.log(typeof str); // Output: "string"
console.log(str[0]);     // Output: "1" (acts like character sequence)
console.log(Number(str) + 5); // Output: 128 (can convert and calculate)

let x = 123;
console.log(x[0]); // undefined
