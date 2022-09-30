const PLAYER_WINS = 1;
const COMPUTER_WINS = 0;
const DRAW = -1;

function generateRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

function getComputerChoice() {
    switch (generateRandomInt(3)) {
        case 1: 
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3: 
            return "scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection) {

    //make player selection case insensitive
    playerSelection = playerSelection.toLowerCase();

    // determine the winner
    if (playerSelection === "rock" 
            && computerSelection === "scissors") {
        console.log("You Win! Rock beats Scissors");
        result = PLAYER_WINS;
    } else if (playerSelection === "paper" 
            && computerSelection === "rock") {
        console.log("You Win! Paper beats Rock");
        result = PLAYER_WINS;
    } else if (playerSelection === "scissors" 
            && computerSelection === "paper") {
        console.log("You Win! Scissors beat Paper");
        result = PLAYER_WINS;
    } else if (computerSelection === "rock" 
            && playerSelection === "scissors") {
        console.log("You Lose! Rock beats Scissors");
        result = COMPUTER_WINS;
    } else if (computerSelection === "paper" 
            && playerSelection === "rock") {
        console.log("You Lose! Paper beats Rock");
        result = COMPUTER_WINS;
    } else if (computerSelection === "scissors" 
            && playerSelection === "paper") {
        console.log("You Lose! Scissors beat Paper");
        result = COMPUTER_WINS;
    } else if (computerSelection === playerSelection) {
        console.log("It's a draw!");
        result = DRAW;
    }

    return [result, playerSelection, computerSelection];
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
    } while (roundResult === DRAW);

    return roundResult; 
}

function isAnyButtonColored(buttons) {
    let isColored = false;

    buttons.forEach(button => {
        if (button.className !== "") {
            isColored = true;
        }
    });

    return isColored;
}

