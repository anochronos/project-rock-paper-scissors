function getComputerChoice(){
    const choice = ["Rock", "Paper", "Scissors"];
    const play = Math.floor(Math.random() * choice.length);
    return choice[play];
}
