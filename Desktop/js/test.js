let number = "42abc"; // cannot be converted to a number that's why it will return NaN
let convertedNumber = Number(number);
console.log(typeof number);
console.log(typeof convertedNumber);
console.log(convertedNumber);
let correct = true;
console.log(typeof correct);
let correctConverted = Number(correct);
console.log(typeof correctConverted);
console.log(correctConverted);

//type converter - from string to number using number using another variable
//bool to number conversion
//true-1
//false-0

let loggedin = "true"; // string
let loggedinConverted = Boolean(loggedin); // converting string to boolean
console.log(typeof loggedin);
console.log(typeof loggedinConverted);
console.log(loggedinConverted);

let loggedin2 = "false";
let loggedinConverted2 = Boolean(loggedin2); // converting string to boolean
console.log(typeof loggedin2);
console.log(typeof loggedinConverted2);
console.log(loggedinConverted2);