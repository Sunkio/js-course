// var, let, and const

var x = 1;
var x = 2; // does not throw an error
console.log(x); // 2
// better use let if you know you will reassign the variable, otherwise use const

// var does have a different scope than let and const
// var is function scoped
// let and const are block scoped
// block scoped means that the variable is only available inside the block it was declared in
// function scoped means that the variable is available inside the function it was declared in

