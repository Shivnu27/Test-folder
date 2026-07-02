//Create a named function to divide two numbers
function divide(a: number, b: number):number {
    return a/b;
}
console.log("Divide:", divide(10,5));
//----------------------------------------------------------------

//Create a named function to find modulus of two numbers.
function modulus(a: number, b: number): number {
    return  a%b;
}
console.log("modulus", modulus(10 ,5));
//----------------------------------------------------------------

//Create a named function to multiply two numbers.
function multiply(a: number, b: number): number {
    return a*b;
}
console.log("Multiply:", multiply(10,5));
//-----------------------------------------------------------------

// Arrow Function
const greeting = (name:string): string => {
    return "Hello, " + name;
}
console.log(greeting ("Mani"));
// -------------------------------------------------------------------

// Anonymous functions
function greetingMorning (name: string): string {
    return "Morning, " + name;
}
console.log(greetingMorning("Mani"));
//---------------------------------------------------------------------

//Default parameter functions 
function greet(name: string = "Guest"): string {
    return "Hello, " + name;
}
console.log(greet());
console.log(greet("Mani"));
//----------------------------------------------------------------------

// Optional parameter functions
function fullName(firstName: string, lastName?: string): string {
    return lastName ?  `${firstName} ${lastName}` : firstName;
}
console.log(fullName("Mani"));
console.log(fullName("Mani","M"));
//-----------------------------------------------------------------------

//Rest-parameter functions
function small(...number: number[]): number {
    return number.reduce((acc, curr) => acc + curr, 0);
}
console.log(small(1,2,3,4));
console.log(small(10,20,30,40));
//------------------------------------------------------------------------

//Recursive functions
function factorial(n:number): number {
if (n === 0) return 1;
 return n * factorial(n-1);
}
console.log(factorial(3));
console.log(factorial(5));

//----------------------------------------------------------------------------
for (let i = 1; i >= 5; i++) {
    if(i === 3) break;
    console.log(i);
}