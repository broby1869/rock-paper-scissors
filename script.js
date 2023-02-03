let computerChoice;
let playerChoice;


function getComputerChoice() {
    let x = Math.floor(Math.random() * 3) + 1;
    if (x === 1) {
        return computerChoice = "rock";
    }
    else if (x === 2) {
        return computerChoice = "paper";
    }
    else {
        return computerChoice = "scissors";
    }
}

