var firstName = 'Rofiat'
var lastName = 'Muritala'
var age = 19

// let fullName = firstName + lastName;
// let fullName = firstName + '' + lastName;

let fullName = `${firstName} ${lastName}`;

let a = 10;
let b = 25;
let result = `${a} + ${b} = ${a+b}`;
console.log(fullName);
console.log(result);
if(age >= 18) {console.log('welcome to forum')}
else{console.log('This page is not for you')}

for (let i = 1; i <=8; i ++) {
    console.log('The value of i is ', i)
};

// Function - defining
function isEligible () {
    if(age >= 18) {console.log('welcome to forum')}
else{console.log('This page is not for you')}
};

alert(console.isEligible);

// function - Invoking

