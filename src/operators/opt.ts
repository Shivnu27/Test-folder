//Arithmetic Operators 
let a: number = 10;
let b: number = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//Assignment Operators

let num: number = 10;
num += 5;
console.log(num);
num -= 3;
console.log(num);
num *= 2;
console.log(num);
num /= 4;
console.log(num);

//Comparison Operators

let x: number = 10;
let y: number = 20;

console.log(x == y); 
console.log(x != y); 
console.log(x > y); 
console.log(x < y); 
console.log(x >= y); 
console.log(x <= y);

//Logical Operators

let age: number = 25;
let hasID: boolean = true;
console.log(age >= 18 && hasID);
console.log(age >= 30 || hasID);
console.log(!hasID);

//Increment & Decrement Operators

let count: number = 20;
console.log(count++);
console.log(count);
console.log(++count);
console.log(count--);
console.log(count);

//Ternary Operator
//Syntax: condition? valueiftrue:valueiffalse

let mark: number = 27;
let result = (mark >= 18) ? "true" : "false";

console.log (mark);
console.log(result);

