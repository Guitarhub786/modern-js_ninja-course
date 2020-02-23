// common string methods

let email = 'mario@thenetninja.co.uk';

let result = email.lastIndexOf('n');
// '14'

let result = email.slice(0, 5);
let result = email.slice(2, 5);
// 'mario' // 'rio'
// first argument from, second argument to

let result = email.substr(6, 3);
// 'the' 
// NOTE: second position does not start from 0 of first argument. Otherwise would = 'then"
// first argument from, second argument how many character want to go along.

// replace: Find first character in first argument with second argument's character.
let result = email.replace('m', 'w');
// 'wario@thenetninja.co.uk'

let result = email.replace('n', 'w');
// 'mario@thewetninja.co.uk'
// Note: only replaced first 'n'

console.log(result);

