// Your First Interactive Game
function js11 ()
{
    console.log("JS-11: START");

    let playGame = confirm("Shall we play Rock, Paper, Scissors?");
    if (playGame) {
        // play the game
        let playerChoice = prompt("Choose Rock, Paper, or Scissors");
        if (playerChoice) {
            let playerOne = playerChoice.trim().toLowerCase();
            if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
                let computerChoice = Math.floor(Math.random() * 3 + 1);
                let computer = computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors";
                let result =
                    playerOne === computer ? `You: ${playerOne}\nComputer: ${computer}\nIt's a tie!` :
                        playerOne === "rock" && computer === "paper"
                            ? `You: ${playerOne}\nComputer: ${computer}\nYou lose!`
                            : playerOne === "paper" && computer === "scissors"
                                ? `You: ${playerOne}\nComputer: ${computer}\nYou lose!`
                                : playerOne === "scissors" && computer === "rock"
                                    ? `You: ${playerOne}\nComputer: ${computer}\nYou lose!`
                                    : `You: ${playerOne}\nComputer: ${computer}\nYou win!`;
                alert(result);
                let playAgain = confirm("Would you like to play again?");
                playAgain ? location.reload() : alert("Thanks for playing!");
            } else {
                alert("That's not a valid choice. Try again.");
            }
        } else {
            alert("I guess you changed your mind. Maybe next time!");
        }
    } else {
        alert("Maybe next time!");
    }
    console.log("JS-11: END");
};

export { js11 };