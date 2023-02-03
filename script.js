let computerSelection;
let playerSelection;


function getComputerChoice() {
    let x = Math.floor(Math.random() * 3) + 1;
    if (x === 1) {
        return computerSelection = "rock";
    }
    else if (x === 2) {
        return computerSelection = "paper";
    }
    else {
        return computerSelection = "scissors";
    }
}

function getPlayerChoice() {
    let x = prompt("Choose rock, paper, or scissors");
    x = x.toLowerCase();
    if (x === "rock" || x === "paper" || x === "scissors") {
        return playerSelection = x;
    }
    else {
        alert("Invalid Selection")
        return playerSelection = null;
    }
}