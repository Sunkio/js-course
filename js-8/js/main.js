// Conditionals: Switch Statements

switch(Math.floor(Math.random() * 5 + 1)) {
    case 1:
        console.log('1');
        break;

    case 2:
        console.log('2');
        break;

    case 3:
        console.log('3');
        break;

    default:
        console.log('No match');
}


// Example 2 - Rock Paper Scissors

let playerOne = "rock";
let computer = "paper";

switch(playerOne) {
    case computer:
        console.log("It's a tie!");
        break;
    case "rock":
        if (computer === "paper") {
            console.log("Computer wins!");
        } else {
            console.log("Player One wins!");
        }
        break;
    case "paper":
        if (computer === "scissors") {
            console.log("Computer wins!");
        } else {
            console.log("Player One wins!");
        }
        break;
    default:
        if (computer === "rock") {
            console.log("Computer wins!");
        } else {
            console.log("Player One wins!");
        }
}
