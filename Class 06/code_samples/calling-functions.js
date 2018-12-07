function addMe(a,b){
    return a + b;
};

addMe(1,2); // correct function call but won't log anything
let result = addMe(1,2);
console.log(result); // logs 3
console.log(addMe(5,1)); // logs 6