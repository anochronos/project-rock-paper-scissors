function getComputerChoice(){
    const choice = ["Rock", "Paper", "Scissors"];
    const play = Math.floor(Math.random() * choice.length);
    return choice[play];
}

function getPlayerSelection(){
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

