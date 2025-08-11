let computerChoice;
let playerChoice;
// get computer choice
getPlayerChoice();
getComputerChoice();
console.log(playerChoice);
console.log(computerChoice);
// get user choice

// determine winner

// add to score

// compare score to winning round number

// reset?

//functions
function getComputerChoice() {
    const min = Math.ceil(1);
    const max = Math.floor(4);
    computerChoice = Math.floor(Math.random() * (max - min) + min);
    if (computerChoice === 1) {
        computerChoice = "Rock";
        return computerChoice;
    }
    else if (computerChoice === 2) {
        computerChoice = "Paper";
        return computerChoice;
    }
    else if (computerChoice === 3) {
        computerChoice = "Scissors";
        return computerChoice;
    }
}

function getPlayerChoice() {
    playerChoice = prompt("Rock, Paper or Scissors?");
    return playerChoice;
}