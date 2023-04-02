// Functions

// Methods = Built-in Functions!
"Dave".toLowerCase();
Math.random();

// Function Declaration Syntax:
function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(2, 6));


function getUserNameFromEmail(email) {
  return email.split("@")[0];
}
console.log(getUserNameFromEmail("user@github.com"));

// Anonymous Function Syntax:
const sum = function(num1, num2) {
    return num1 + num2;
};
console.log(sum(2, 6));

// Arrow Function Syntax:
const sum = (num1, num2) => {
    return num1 + num2;
};

const toProperCase = (str) => {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
};
console.log(toProperCase("dave"));