/*PSEUDOCODE
Rules
    there are 2 opposing sides: player vs computer(cpu)
    both side start off with 0 points
    every round, each side has a choice of either (Rock , Paper, or Scissors) 
    cpu's choice is randomized
    player gets to choose 
    Rock is greater than Scissors, but less than Paper
    Scissors is greater than Paper, but less than Rock
    Paper is greater than Rock, but less than Scissors
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

