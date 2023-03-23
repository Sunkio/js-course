// Numbers
const myNumber = 42;
const myFloat = 42.42;
const myString = '42.123abc';

//Number Methods
// The Numberi.isInteger() method determines whether the passed value is an integer.
Number.isInteger(42); // true

// The Number.parseFloat() method parses a string argument and returns a floating point number. If a number cannot be parsed from the  argument, t returns NaN (Not a Number).
console.log(Number.parseFloat(myNumber)); // 42
console.log(Number.parseFloat(myFloat)); // 42.42
console.log(Number.parseFloat(myString)); // 42.123 (the first number in the string)

// The Number.parseInt() method parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems). If a number cannot be parsed from the  argument, it returns NaN (Not a Number).
console.log(Number.parseInt(myNumber)); // 42

// The toFixed() method formats a number according to how many decimal points you provide as the parameter.
console.log(myFloat.toFixed(2)); // '42.42' => this returns a string, not a number!
console.log(Number(myFloat.toFixed(2))); // 42.42 => this returns a number  (Number() is a global function)

i// The toString() method returns a string representing the specified Number object. The toString() method is used to convert a number to a string.
console.log(myNumber.toString()); // '42'

