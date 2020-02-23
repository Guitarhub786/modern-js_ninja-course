//# strings
console.log('hello, world');

let email = 'mario@thenetninja.co.uk';
console.log(email);

//# string concatenation
let firstName = 'Brandon';
let lastName = 'Sanderson';

let fullName = firstName + ' ' + lastName;

//# getting characters
// Extract single character stored by using square bracket notation.
console.log(fullName[0]);
// "B"

//# string length
console.log(fullName.length);

//# string methods
// Strings have different methods/functions associated with them.
// These functions are called methods.
// Function: A snippet of code which performs specific task
// Method: A function associated with a particular object or data type.

console.log(fullName.toUpperCase());

// Method: .toUpperCase()
// because it is a function we add bracket/parentheses on the end of it.
//[a function that does something (convert name to upper case)]
// Property: .length 
// [this isn't a function as not performing any snippet of code to do something. Finding out property of a string]

// NOTE: Some Methods do actually alter the orignal variable value themselves and some don't.

let index = email.indexOf('@');
// '5'

// Code inside bracket is called an 'argument' and some call 'parameter'.
// But: When we pass a value into a 'method' like above, this is an argument. 