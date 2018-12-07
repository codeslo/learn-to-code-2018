// calculators project

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a/b;
}

console.log(add(5,1)); // logs 6
console.log(subtract(8,5)); // logs 3
console.log(multiply(2,10)); // logs 20
console.log(divide(100,0));// returns infinity. After you learn if/else, try to make this return an error that logs ("can't divide by zero");