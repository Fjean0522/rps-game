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

    SAME CHOICE
        if (both sides chooses the same thing)
        {then it is a tie}

    Winning
        wichever side reaches 3 points first, wins.
        after each game, player can choose to play again
*/

/*CREATE AND CONNECT VARIABLES TO HTML DOC TO DISPLAY
  BOTH SIDE'S CHOICES & GAME RESULTS*/
const playerChoiceDisplay = document.getElementById("player-choice")
const cpuChoiceDisplay = document.getElementById("cpu-choice")
const resultsDisplay = document.getElementById("results")

//CREATE VARIBALE TO GET CHOICES FROM HTML BUTTONS 
const possibleChoices = document.querySelectorAll('button')

// GET & DISPLAY PLAYER CHOICE, COMPUTER CHOICE, & RESULTS
let playerChoice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerChoice = e.target.id
    playerChoiceDisplay.innerHTML = playerChoice
    cpuChoiceDisplay.innerHTML = getCpuChoice()
    resultsDisplay.innerHTML = getRoundResults()
}))

// CALCULATE AND RADOMIZE COMPUTER'S CHOICE
function getCpuChoice() {
    const cpuChoice = Math.floor(Math.random() * possibleChoices.length)
    /*generates a random number from 0 to amount of options in possibleChoices.
      there are 3 options, so random number would be from 0 - 2*/
    if (cpuChoice === 0) {
        return 'Rock'
    } else if (cpuChoice === 1) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

//CALCULATE RESULTS
function getRoundResults() {
    if (playerChoice == 'Rock' && getCpuChoice() == 'Scissors' ||
        playerChoice == 'Scissors' && getCpuChoice() == 'Paper'||
        playerChoice == 'Paper' && getCpuChoice() == 'Rock') {
            return `You win! ${playerChoice} beats ${getCpuChoice()}`
        } else if (playerChoice == getCpuChoice()) {
            return 'It\'s a tie!'
        } else {
            return `Cpu wins! ${getCpuChoice()} beats ${playerChoice}`
        }
}