// Conditionals: If Statements
let customerIsBanned = false;
let soup = "chicken noodle soup";
let crackers = true;
let reply;

if (customerIsBanned) {
    reply = "You are banned from this establishment. No soup for you!";
} else if (soup && crackers) {
  reply = `Here is your ${soup} and crackers.`;
} else if (soup) {
    reply = `Here is your ${soup}.`;
} else {
    reply = "Sorry, we are all out of soup.";
}
console.log(reply);

// Example 2
let testScore = 89;
let collegeStudent = true;
let grade;

if (testScore >= 90) {
    grade = "A";
} else if (testScore >= 80) {
    grade = "B";
} else if (testScore >= 70) {
    grade = "C";
} else if (testScore >= 60) {
    grade = "D";
} else {
    if (collegeStudent) {
      grade = "U";
    } else {
      grade = "F";
    }
}
console.log(grade);


// Example 3: Rock Paper Scissors Decision Tree
if (playerOne === computer) {
  // tie game!
} else if (playerOne === "rock") {
  if (computer === "paper") {
    // computer wins
  } else {
    // playerOne wins
  }
} else if (playerOne === "paper") {
  if (computer === "scissors") {
    // computer wins
  } else {
    // playerOne wins
  }
} else if (playerOne === "scissors") {
  if (computer === "rock") {
    // computer wins
  } else {
    // playerOne wins
  }
}