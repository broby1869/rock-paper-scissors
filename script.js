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

let playerWins = 0;
let computerWins = 0;

for (i = 0; i < 5; i++) {
    if (playerWins === 3) {
        alert("The humans live on, for now...")
    }
    else if (computerWins === 3) {
        alert("The machines win. Program terminated.")
    }
    else {
        function playRound() {
            for (n = 0;; n++) {
                getComputerChoice();
                console.log(computerSelection)
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
            console.log(playerSelection, computerSelection);
        }
    }
}