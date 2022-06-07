function computerPlay(){
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

//console.log(computerPlay())

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return -1;
        } else if (computerSelection === "paper") {
            return 0;
        } else {
            return 1;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return 1;
        } else if (computerSelection === "paper") {
            return -1;
        } else {
            return 0;
        }
    } else {
        if (computerSelection === "rock") {
            return 0;
        } else if (computerSelection === "paper") {
            return 1;
        } else {
            return -1;
        }
    }
}

// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

function game(){
    
    let rounds = 5;
    let playerScore = 0;
    let computerScore =0;
    while (rounds!=0){
        let playerChoice = prompt("Enter selection (rock, paper, scissors): ");
        console.log("Player chose "+ playerChoice);
        let computerChoice = computerPlay();
        console.log("Computer chose " + computerChoice);
        let roundResult = playRound(playerChoice, computerChoice);
        console.log("Round result: " + roundResult);
        if (roundResult == -1){
            console.log("Draw!");
        } else if(roundResult == 1){
            playerScore++;
            rounds --;
        } else if(roundResult == 0){
            computerScore++;
            rounds --;
        }
        console.log("Scores: " + playerScore + " - " + computerScore);

    }

    if(playerScore > computerScore){
        console.log("Player wins!");
    } else if (playerScore < computerScore){
        console.log("Computer wins!");
    }

}
game();