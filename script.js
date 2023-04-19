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

/*CREATE AND CONNECT VARIABLES TO HTML DOC TO DISPLAY,
  BOTH SIDE'S CHOICES & GAME RESULTS*/
let playerChoice
let cpuChoice
let results
const playerChoiceDisplay = document.getElementById("player-choice")
const cpuChoiceDisplay = document.getElementById("cpu-choice")
const resultsDisplay = document.getElementById("results")

//CREATE VARIBALE TO GET CHOICES FROM HTML BUTTONS 
const possibleChoices = document.querySelectorAll('button')

// GET & DISPLAY PLAYER CHOICE
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerChoice = e.target.id
    playerChoiceDisplay.innerHTML = playerChoice 
    getCpuChoice()
    getRoundResults()  /*invoke functions to get & display cpu choice & results,
    after player has clicked on choice*/
}))

// CALCULATE AND RANDOMIZE COMPUTER'S CHOICE
function getCpuChoice() {
    const calCpuChoice = Math.floor(Math.random() * possibleChoices.length)
    /*generates a random number from 0 to amount of options in possibleChoices.
      there are 3 options, so random number would be from 0 - 2*/
    if (calCpuChoice === 0) {
        cpuChoice = 'Rock'
    } else if (calCpuChoice === 1) {
        cpuChoice = 'Paper'
    } else {
        cpuChoice = 'Scissors'
    }
    cpuChoiceDisplay.innerHTML = cpuChoice  /*connect to html #cpu-choice,
    to display cpu's choice */
}

//CALCULATE RESULTS
function getRoundResults() {
    if (playerChoice == 'Rock' && cpuChoice == 'Scissors' ||
        playerChoice == 'Scissors' && cpuChoice == 'Paper'||
        playerChoice == 'Paper' && cpuChoice == 'Rock') {
            results = `You win! ${playerChoice} beats ${cpuChoice}`
        } else if (playerChoice == cpuChoice) {
            results = 'It\'s a tie!'
        } else {
            results = `Cpu wins! ${cpuChoice} beats ${playerChoice}`
        }
        resultsDisplay.innerHTML = results  /*connect to html #results,
        to display results */
}