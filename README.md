# rock-paper-scissors
TOP Rock Paper Scissors project - my first JS program written from scratch

Psuedocode for 5 round rock, paper, scissors game:

declare getComputerChoice function
    randomly select rock, paper, or scissors
    store value in variable computerSelection

declare playerChoice function
    prompt user to select rock, paper, or scissors
    convert input string toLowerCase()
    store value in variable playerSelection

create variable playerWins
create variable computerWins

playRound function
    getComputerChoice()
    getPlayerChoice()
        if playerSelection === computerSelection
            alert("It's a tie! Choose again!")
            getPlayerChoice()
        else
            return playerSelection

    if playerSelection = rock && computerSelection = scissors
        alert("Player wins this round!")
        return playerWins = playerWins + 1
    else if playerSelection = paper && computerSelection = rock
        alert("Player wins this round!")
        return playerWins = playerWins + 1
    else if playerSelection = scissors && computerSelection = paper
        alert("Player wins this round!")
        return playerWins = playerWins + 1
    else
        alert("Computer wins this round!")
        return computerWins = computerWins + 1
        

set loop that iterates to 5
    loop evaluates if either player or computer has 3 wins
        returns and declares winner if yes
    continues if not
    run function playRound
    increment by 1
end