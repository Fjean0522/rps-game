/*
Rules
    there are 2 opposing sides: player vs computer(cpu)
    both sides start off with 0 points
    every round, each side has a choice of either (Rock , Paper, or Scissors) 
    cpu's choice is randomized
    player gets to choose 
    Rock beats Scissors
    Scissors beats Paper
    Paper beats Rock

Playing a Round
    Player's choice
        if (player chooses Rock, and cpu chooses Scissors or
        if player chooses Scissors, and cpu chooses Paper or
        if player chooses Paper, and cpu chooses Rock) 
        {player wins and 1 point is added}
    
    Cpu's choice
        if (cpu chooses Rock, and player chooses Scissors or
        if cpu chooses Scissors, and player chooses Paper or
        if cpu chooses Paper, and player chooses Rock) 
        {cpu wins and 1 point is added}

    Winning
        wichever side reaches 3 points first, wins
        after each game, player can choose to play again
*/

const possibleChoices = ['rock', 'paper', 'scissors'];
const cpuChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)]
//creates a varibale that makes a random choice for cpu from the possibleChoices array

const getCpuChoice = () => cpuChoice 
// creates a function that returns cpuChoice

function playRound() {
    let playerChoice = prompt('Choose one of the following: rock, paper, scissors')
    getCpuChoice()
    if (playerChoice == 'rock' && cpuChoice == 'scissors' ||
        playerChoice == 'scissors' && cpuChoice == 'paper'||
        playerChoice == 'paper' && cpuChoice == 'rock') {
            console.log('You win!')
            console.log(`${playerChoice} beats ${cpuChoice}`)
        } else if (playerChoice == cpuChoice) {
            console.log('It\'s a tie')
        } else {
            console.log('Cpu wins!')
            console.log(`${cpuChoice} beats ${playerChoice}`)
        }
}