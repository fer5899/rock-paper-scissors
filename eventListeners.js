const buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener("click", 
    e => playRound(e.target.id, getComputerChoice())
    ));