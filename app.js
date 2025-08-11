let computerChoice;
let playerChoice;
let computerScore = 0;
let playerScore = 0;

playGame();

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
        playerScore++;
        return playerScore;
    }
    else if (playerChoice === "paper" && computerChoice === "scissors") {
        console.log("Scissors beats Paper, you lose!");
        computerScore++;
        return computerScore;
    }
    else if (playerChoice === "scissors" && computerChoice === "paper") {
        console.log("Scissors beats Paper, you win!");
        playerScore++;
        return playerScore;
    }
    else if (playerChoice === "scissors" && computerChoice === "rock") {
        console.log("Rock beats Scissors, you lose!");
        computerScore++;
        return computerScore;
    }
    else if (playerChoice === "rock" && computerChoice === "scissors") {
        console.log("Rock beats Scissors, you win!");
        playerScore++;
        return playerScore;
    }
    else if (playerChoice === "rock" && computerChoice === "paper") {
        console.log("Paper beats Rock, you lose!");
        computerScore++;
        return computerScore;
    }
}

function playGame() {
    while (computerScore < 5 && playerScore < 5) {
        getPlayerChoice();
        getComputerChoice();
        playRound(playerChoice, computerChoice);
    }
    if (playerScore === 5) {
        console.log("You win the game!");
    }
    else if (computerScore === 5) {
        console.log("You lose the game!");
    }
}