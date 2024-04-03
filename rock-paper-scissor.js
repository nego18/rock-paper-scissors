function getComputerChoice() {  // function that give de computer choice
    let num = Math.floor(Math.random() * 3 + 1);    // generate a number from 1 to 3
    let compChoice;
    switch (num) {                      // assign the number to choice
        case 1:
            compChoice = 'rock';
            break;
    
        case 2:
            compChoice = 'paper';
            break;
    
        case 3:
            compChoice = 'scissor';
            break;
    }

    return compChoice
}

let result;
let com = 0;
let pla = 0;
let tie = 0;

function playRound(playerSelection, computerSelection) {    //function that play the game, gives the winner and count the times that who won
    if (computerSelection === 'rock' && playerSelection === 'scissor' || computerSelection === 'paper' && playerSelection === 'rock' || computerSelection === 'scissor' && playerSelection === 'paper') {
        com += 1;
        result =  `You LOSE ${computerSelection} beats ${playerSelection}`;
    } else if (computerSelection === 'rock' && playerSelection === 'paper' || computerSelection === 'paper' && playerSelection === 'scissor' || computerSelection == 'scissor' && playerSelection === 'rock') {
        pla += 1;
        result = `You WIN ${playerSelection} beats ${computerSelection}`;
    } else {
        tie += 1;
        result = "It's a tie. Let's go again";
    }

    return result
}


function playGame() {               // function to play the game 5 times
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Write your choice: rock, paper or scissor').toLowerCase()
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection), com, pla, tie);
    }
};

playGame();

if (com > pla) {            // option to play the game another round or leave it that way
    console.log(`I beat you ${com} to ${pla}. Better luck next time`);
} else if (pla > com) {
    console.log(`I can't believe it. You Win ${pla} to ${com}`);
} else {
    if (window.confirm("It's a tie. I can't have it. Go again?")) {
        alert("All right. Let's go");
        playGame()
    } else {
        alert('YOU COWARD!!!');
    }
}