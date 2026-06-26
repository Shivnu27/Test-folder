//if Statement
// let age: number = 27;

// if (age >= 18) {
//     console.log ("You are eligible to vote.");
// }

// if...else Statement 
// let age: number = 16;

// if (age >= 18) {
//     console.log("You are eligible to vote.");
// } else {
//     console.log("Sorry, you are not eligible.");
// }

//if...else if...else Statement
// let mark: number = 30;
// if (mark >=90) {
//     console.log("Garde A");
// }
// else if (mark >= 75) {
//     console.log("Grade B");
// }
// else if(mark >= 50) {
//     console.log("Grade C");
// }
// else {
//     console.log("Fail");
// }

//switch Statement
// switch (expression) { 
// case value1: 
// break; 
// case value2: 
// break; 
// default: 
// }

// let day: number = 3; 
// switch (day) { 
// case 1: 
// console.log("Monday"); 
// break; 
// case 2: 
// console.log("Tuesday"); 
// break; 
// case 3: 
// console.log("Wednesday"); 
// break; 
// case 4: 
// console.log("Thursday"); 
// break; 
// case 5: 
// console.log("Friday"); 
// break; 
// default: 
// console.log("Weekend!"); 
// } 

// Ternary Operator (?:)
// Syntax: condition ? expressionIfTrue : expressionIfFalse; 

// let age: number = 17; 
// let message = (age >= 18) ? "You can vote " : "You are too young "; 
// console.log(message); 

Nested Conditions
Syntax:
// if (condition1) { 
// // Code executes if condition1 is tre 
// if (condition2) { 
// // Code executes if both condition1 and condition2 are true 
// } else { 
// // Executes if condition1 true but condition2 false 
// } 
// } else { 
// // Executes if condition1 false 
// }

// let username = "admin"; 
// let password = "1234"; 
// if (username === "admin") { 
// if (password === "1234") { 
// console.log("Login successful "); 
// } else { 
// console.log("Wrong password "); 
// } 
// } else { 
// console.log("Invalid username "); 
// }