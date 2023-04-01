// Math Methods and Properties
function js5() {
    console.log("JS-5: START");
    // Pi
    console.log(Math.PI);

    // The Math.trunc() method returns the integer part of a number by removing any fractional digits.
    console.log(Math.trunc(Math.PI)); // returns 3
    // The Math.round() method returns the value of a number rounded to the nearest integer.
    console.log(Math.round(Math.PI)); // returns 3
    console.log(Math.round(4.7)); // returns 5
    console.log(Math.round(4.4)); // returns 4
    // The Math.ceil() method returns the smallest integer greater than or equal to a given number.
    console.log(Math.ceil(Math.PI)); // returns 4
    console.log(Math.ceil(4.7)); // returns 5
    console.log(Math.ceil(4.4)); // returns 5
    // The Math.floor() method returns the largest integer less than or equal to a given number.
    console.log(Math.floor(Math.PI)); // returns 3
    console.log(Math.floor(4.7)); // returns 4
    console.log(Math.floor(4.4)); // returns 4

    // The Math.pow() method returns the base to the exponent power, that is, baseexponent.
    console.log(Math.pow(2, 3)); // returns 8
    console.log(Math.pow(3, 2)); // returns 9
    // The Math.min() method returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and
    // can't be converted into one.
    console.log(Math.min(2, 3)); // returns 2
    console.log(Math.min(3, 2)); // returns 2
    console.log(Math.min(2, 3, 4, 5)); // returns 2
    console.log(Math.min(2, 3, 4, 5, 1)); // returns 1
    // The Math.max() method returns the highest-valued number passed into it, or NaN if any parameter isn't a number and can't be converted into one.
    console.log(Math.max(2, 3)); // returns 3
    console.log(Math.max(3, 2)); // returns 3
    console.log(Math.max(2, 3, 4, 5)); // returns 5
    console.log(Math.max(2, 3, 4.34, 5.67, 1)); // returns 5.67
    console.log(Math.max(2, 3, 4, 5, 1, 'a')); // returns NaN
    console.log(Math.max(2, 3, 4, 5, 1, 'a', 6)); // returns NaN

    // The Math.random() method returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.
    console.log(Math.random()); // returns a random number
    console.log(Math.floor(Math.random() * 10) + 1); // returns a random number from 1 to 10
    // Tip: Always choose Math.floor(), not Math.ceil() for generating a number from 1 to 1ß, because Math.ceil() has a chance or returning 0
    console.log("JS-5: END");
};

export { js5 };