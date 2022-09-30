const MAX_ROUNDS = 5;

const buttons = document.querySelectorAll("button");

const playerScoreElement = document.querySelector("#player-score");
const computerScoreElement = document.querySelector("#computer-score");

const roundCounterElement = document.querySelector("#round-counter");

let roundCounter = 0;
let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => button.addEventListener("click", e => {

    if (isAnyButtonColored(buttons)) return;

    let [result, playerSelection, computerSelection] = playRound(
        e.target.id, getComputerChoice());
    
    // Color selected buttons by player and computer
    buttons.forEach(button => {
        if (playerSelection === computerSelection) {
            if (playerSelection === button.id) {
                button.classList.add("draw");
            }
        } else {
            if (playerSelection === button.id) {
                button.classList.add("player-selection");
            } else if (computerSelection === button.id) {
                button.classList.add("computer-selection");
            }
        }
    });

    if (roundCounter === MAX_ROUNDS) {
        roundCounter = 0;
        computerScore = 0;
        playerScore = 0;
        computerScoreElement.textContent = computerScore;
        playerScoreElement.textContent = playerScore;
    }

    // Update score
    if (result === COMPUTER_WINS) {
        computerScore++;
        computerScoreElement.textContent = computerScore;
    } else if (result === PLAYER_WINS) {
        playerScore++;
        playerScoreElement.textContent = playerScore;
    }

    if (result !== DRAW) {
        roundCounter++;
        roundCounterElement.textContent = `Round ${roundCounter}/${MAX_ROUNDS}`;
    }

    if (roundCounter === 5) {
        if (playerScore > computerScore) {
            roundCounterElement.textContent = "The player wins!";
        } else {
            roundCounterElement.textContent = "The computer wins!";
        }
    }

    // After delay, transition buttons back to normal color state
    setTimeout(function() {
        buttons.forEach(button => button.className = "")
    }, 1000);
    
}));