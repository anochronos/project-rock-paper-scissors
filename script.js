function getComputerChoice(){
    const choice = ["Rock", "Paper", "Scissors"];
    const play = Math.floor(Math.random() * choice.length);
    return choice[play];
}

function getPlayerChoice(){
    while(true){
        let choice = parseInt(prompt("Please pick one of the following plays\n 1.Rock\n 2.Paper\n 3.Scissors"));
        switch (choice) {
            case 1:
                return "Rock";
            case 2:
                return "Paper";
            case 3:
                return "Scissors";
            default:
                alert("Invalid Choice, Please Try Again.");
        }
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection===computerSelection){
        console.log("Its a Tie!");
        return;
    }
    switch(playerSelection){
        case "Rock":
            if(computerSelection !== "Paper"){
                console.log("You Win! Rock beats Paper");
                playerWins++;
            }
            else {
                console.log("You Lose! Paper beats Rock");
                computerWins++;
            }
            break;
        
        case "Paper":
            if(computerSelection !== "Scissors"){
                console.log("You Win! Paper Beats Rock");
                playerWins++;
            }
            else {
                console.log("You Lose! Scissors beats Paper");
                computerWins++;
            }
            break;
        
        case "Scissors":
            if(computerSelection !== "Rock"){
                console.log("You Win! Scissors beats Paper");
                playerWins++;
            }
            else {
                console.log("You Lose! Rock beats Scissors");
            }
            break;
    }
}

function game(){
    for(let i = 1; i <= 5; i++){
        playRound(getPlayerChoice(),getComputerChoice());
    }

    if (playerWins > computerWins)
        console.log("Congratulations! You Won the Game!")
    else if (playerWins===computerWins)
        console.log("The game is a Tie!");
    else
        console.log("Unfortunately computer won the game!")
}

let playerWins = 0;
let computerWins = 0;
game();