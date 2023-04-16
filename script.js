function cpuChoice() {
    let choice = ['Rock','Paper','Scissors']
    return choice[Math.floor(Math.random() * choice.length)]
}


const playerSelection = prompt('Select Rock, Paper, or Scissors:');
const cpuSelection = cpuChoice;

function play(playerSelection, cpuSelection) {

}