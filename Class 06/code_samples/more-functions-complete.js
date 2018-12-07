//Define the sample variable
let sample = 5;

//Define the functions
function firstFunc(){
    sample = 10;
    console.log(sample);
}

function secondFunc(){
    sample = sample + 10;
    console.log(sample);
}

function thirdfunc(){
    sample = sample * 10;
    console.log(sample);
}

function fourthFunc(){
    sample = 'I am ' + sample + ' years old.';
    console.log(sample);
}

function fifthFunc(){
    sample = sample + '..wait, no I\'m not';
    console.log(sample);
}

//Call the functions
firstFunc();
fifthFunc();
secondFunc();
thirdfunc();
fourthFunc();