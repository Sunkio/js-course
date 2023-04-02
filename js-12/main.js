// Loops
let myNumber = 0;
while (myNumber < 10) {
    console.log(myNumber);
    myNumber++;
}

// do while
let myNumber2 = 0;
do {
    console.log(myNumber2);
    myNumber2++;
} while (myNumber2 < 10);
// example use case: black jack game - as player whether they want to draw a card

// for loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}

let name = "Dave";
for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}

// break statement - breaks out of the loop
let newName = "Dave";
let counter = 0;
let myLetter = "";
while (true) {
    myLetter = newName[counter];
    console.log(myLetter);
    if (myLetter === "v") break;
    counter++;
}

// continue statement - goes to the next iteration of the loop
for (let i = 0; i < 10; i++) {
    if (i === 5) continue;
    console.log(i);
}