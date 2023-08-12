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
        return "Its a Tie!";
    }
    switch(playerSelection){
        case "Rock":
            if(computerSelection !== "Paper"){
                return "You Win! Rock beats Paper";
            }
            else return "You Lose! Paper beats Rock";
        
        case "Paper":
            if(computerSelection !== "Scissors"){
                return "You Win! Paper Beats Rock";
            }
            else return "You Lose! Scissors beats Paper ";
        
        case "Scissors":
            if(computerSelection !== "Rock"){
                return "You Win! Scissors beats Paper"
            }
            else return "You Lose! Rock beats Scissors";
    }
}
