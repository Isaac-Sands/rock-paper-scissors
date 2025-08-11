let computerChoice;
let playerChoice;
let computerScore = 0;
let playerScore = 0;
// get computer choice
getPlayerChoice();
getComputerChoice();
console.log(playerChoice);
console.log(computerChoice);
playRound(playerChoice, computerChoice);
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
        computerChoice = "rock";
        return computerChoice;
    }
    else if (computerChoice === 2) {
        computerChoice = "paper";
        return computerChoice;
    }
    else if (computerChoice === 3) {
        computerChoice = "scissors";
        return computerChoice;
    }
}

function getPlayerChoice() {
    playerChoice = prompt("Rock, Paper or Scissors?");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        console.log("It's a tie!");
    }
    else if (playerChoice === "paper" && computerChoice === "rock") {
        console.log("Paper beats Rock, you win!");
    }
    else if (playerChoice === "paper" && computerChoice === "scissors") {
        console.log("Scissors beats Paper, you lose!");
    }
    else if (playerChoice === "scissors" && computerChoice === "paper") {
        console.log("Scissors beats Paper, you win!");
    }
    else if (playerChoice === "scissors" && computerChoice === "rock") {
        console.log("Rock beats Scissors, you lose!");
    }
    else if (playerChoice === "rock" && computerChoice === "scissors") {
        console.log("Rock beats Scissors, you win!");
    }
    else if (playerChoice === "rock" && computerChoice === "paper") {
        console.log("Paper beats Rock, you lose!");
    }
}