//Array
//method 1
let num: number[] = [10,20,30];
let mixed: (string | number)[] = ["Hi", 10];
console.log(num);
console.log(mixed);

// Method 2
let fruit: Array<string> = ["Apple", "Banana"];
fruit.unshift("Orange");
console.log(fruit);

// forEach() Method 1 using functions
let fruit: string[] = ["apple", "banana", "orange", "mango"];

fruit.forEach (function(Element, index){

    console.log( `${index}`, `${Element}`);
});

// forEach() Method 2 using Arrow
let fruit: string[] = ["apple", "banana", "orange", "mango"];

fruit.forEach ((Element, index) => {

    console.log( `${index}`, `${Element}`);
});

// Map() method 1

let number: number[] = [1, 2, 3, 5];

let squarenum = number.map(function(Element){
    return(Element * Element);
})
console.log(squarenum);

// Map() method using => 
let number: number[] = [1, 2, 3, 5];

let squarenum = number.map(Element => 
    (Element * Element)
)
console.log(squarenum);

// filter() method using =>

let num:number[] = [1, 2, 3, 4, 5, 6];
let evennumber = num.filter((num)=>num%2==0);
console.log(evennumber);

// Reduce() method using =>

let value:number[] = [1, 2, 3, 4, 5];
let sum = value.reduce((number, curr) => number + curr, 0);
console.log(sum);

