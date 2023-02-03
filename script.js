let computerSelection;
let playerSelection;
let playerWins = 0;
let computerWins = 0;

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

function playRound() {
    for (n = 0;; n++) {
        getComputerChoice();
        getPlayerChoice();
        if (playerSelection === null) {
    
        }
        else if (playerSelection !== computerSelection && playerSelection !== null) {
            break;
        }
        else {
            alert(`Player and Computer chose ${computerSelection}, choose again.`)
        }
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
        alert("Player wins this round!");
        playerWins = playerWins + 1;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        alert("Player wins this round!");
        playerWins = playerWins + 1;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        alert("Player wins this round!");
        playerWins = playerWins + 1;
    }
    else {
        alert("Computer wins this round...");
        computerWins = computerWins + 1;
    }
}

function game() {
    for (i = 0; i < 6; i++) {
        if (playerWins === 3) {
            alert("The humans live on, for now...")
            playerWins = 0;
            computerWins = 0;
            break;
        }
        else if (computerWins === 3) {
            alert("The machines win. Program terminated.")
            playerWins = 0;
            computerWins = 0;
            break;
        }
        else {
            playRound();
            alert(`Humans: ${playerWins}, Machines: ${computerWins}`);
        }
    }
}