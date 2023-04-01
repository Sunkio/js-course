// Conditionals: Ternary Operators
function js9 () {
    console.log("JS-9: START");
// syntax
// condition ? exprIfTrue : exprIfFalse

// example
    let soup1 = "Chicken Noodle Soup";
    let response = soup1 ? "Yes, we have soup" : "Sorry, we are out of soup";
    console.log(response);


// example 2
    let soup2 = "Chicken Noodle Soup";
    let isCustomerBanned = true;
    let soupAccess = isCustomerBanned
        ? "Sorry, you are banned"
        : soup2
            ? `Yes, we have ${soup2} today.`
            : `Sorry, we are out of ${soup2}`;
    console.log(soupAccess);


// example 3
    let testScore = 79;
    let myGrade = testScore > 89 ? "A"
        : testScore > 79
            ? "B"
            : testScore > 69
                ? "C"
                : testScore > 59
                    ? "D"
                    : "F";
    console.log(myGrade);

// example 4 - Rock Paper Scissors

    let player1 = "rock";
    let computer = "paper";
    let result =
        player1 === computer
            ? "It's a tie!"
            : player1 === "rock" && computer === "scissors"
                ? "Player 1 wins!"
                : player1 === "rock" && computer === "paper"
                    ? "Computer wins!"
                    : player1 === "paper" && computer === "rock"
                        ? "Player 1 wins!"
                        : player1 === "paper" && computer === "scissors"
                            ? "Computer wins!"
                            : player1 === "scissors" && computer === "paper"
                                ? "Player 1 wins!"
                                : player1 === "scissors" && computer === "rock"
                                    ? "Computer wins!"
                                    : "Invalid entry";
    console.log(result);
    console.log("JS-9: END");
};

export { js9 };