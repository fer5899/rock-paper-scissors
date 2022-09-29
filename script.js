function generateRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

function getComputerChoice() {
    switch (generateRandomInt(3)) {
        case 1: 
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3: 
            return "Scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection) {

    //make player selection case insensitive
    playerSelection = playerSelection.toLowerCase();

    // determine the winner
    if (playerSelection === "rock" 
            && computerSelection === "Scissors") {
        console.log("You Win! Rock beats Scissors");
        result = 1;
    } else if (playerSelection === "paper" 
            && computerSelection === "Rock") {
        console.log("You Win! Paper beats Rock");
        result = 1;
    } else if (playerSelection === "scissors" 
            && computerSelection === "Paper") {
        console.log("You Win! Scissors beat Paper");
        result = 1;
    } else if (computerSelection === "Rock" 
            && playerSelection === "scissors") {
        console.log("You Lose! Rock beats Scissors");
        result = 0;
    } else if (computerSelection === "Paper" 
            && playerSelection === "rock") {
        console.log("You Lose! Paper beats Rock");
        result = 0;
    } else if (computerSelection === "Scissors" 
            && playerSelection === "paper") {
        console.log("You Lose! Scissors beat Paper");
        result = 0;
    } else if (computerSelection.toLowerCase() === playerSelection) {
        console.log("It's a draw!");
        result = -1;
    }
    else {
        console.log("The player's choice is not supported, "
                    + "please enter either Rock, paper or scissors");
        result = -1;
    } 

    return result;
}

function repeatGame(repeatAmount) {
    playerScore = 0;
    computerScore = 0;


    for (let i = 0; i < repeatAmount; i++) {
        
        roundResult = game();

        if (roundResult === 0) {
            computerScore++;
        } else if (roundResult === 1) {
            playerScore++;
        }

    }
    
    console.log(`The game has ended! 
        The player has a total score of ${playerScore}
        The computer has a total score of ${computerScore}`);

    console.log(playerScore > computerScore ? "The player wins!" 
                                            : "The computer wins!");


}

function game() {  
    do {
        userInput = prompt(
            "Choose your fighter! (Rock, paper or scissors):" ,""
            );
        roundResult = playRound(userInput, getComputerChoice());
    } while (roundResult === -1);

    return roundResult; 
}