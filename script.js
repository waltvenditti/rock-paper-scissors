function computerPlay() {
    let drawNum = Math.floor((Math.random() * 3) + 1);
    let draw = '';
    switch (drawNum) {
        case 1:
            draw = 'Rock';
            break;
        case 2: 
            draw = 'Paper';
            break;
        case 3: 
            draw = 'Scissors';
            break;
        default: 
            draw = undefined;
            break;
    }
    if (draw === undefined) {
        alert("Something went wrong in computerPlay()");
        return;
    }

    return draw; 
}

function playerSelection() {
    let playerChoice;

    while (true) { 
        playerChoice = prompt("Select rock, paper, or scissors:");

        let fPlayerChoice = playerChoice.toLowerCase();
        if (fPlayerChoice === 'scissor') {
            fPlayerChoice = 'scissors';
            playerChoice = 'Scissors'
        }

        if ((fPlayerChoice != 'rock') && 
        (fPlayerChoice != 'paper') && 
        (fPlayerChoice != 'scissors')) {
            console.log("Invalid entry.");
        } else {
            break;
        }
    }
    return titleString(playerChoice); 
}

function titleString(string) {
    let firstLetter = string.slice(0,1);
    let restOfString = string.slice(1);
    firstLetter = firstLetter.toUpperCase();
    restOfString = restOfString.toLowerCase();
    return (firstLetter + restOfString);
}

function playRound(pcPick, manPick) {
    // 0 == draw, 1 == pc wins, -1 == player wins
    let winner = 0;
    let pc = pcPick.slice(0,1);
    let man = manPick.slice(0,1);

    if (man == pc) {
        alert("Draw.");
    }

    if (man == 'R') {
        if (pc == 'P') {
            winner = 1;
            alert("Computer picked paper. Win for Computer.");
        }
        if (pc == 'S') {
            winner = -1;
            alert("Computer picked scissors. Win for Player.");
        }
    }

    if (man == 'P') {
        if (pc == 'S') {
            winner = 1;
            alert("Computer picked scissors. Point for Computer.");
        }
        if (pc == 'R') {
            winner = -1;
            alert("Computer picked rock. Point for Player.");
        }
    }

    if (man == 'S') {
        if (pc == 'R') {
            winner = 1;
            alert("Computer picked rock. Win for Computer");
        }
        if (pc == 'P') {
            winner = -1;
            alert("Computer picked paper. Win for Player.");
        }
    } 

    return winner; 
}
/* 
//This is console version of the game. 
//Deactivated indefinitely. 
function game() {
    let manScore = 0;
    let pcScore = 0;
    let i = 0;

    while (true) {
        let manPick = playerSelection();
        let pcPick = computerPlay();
        score = playRound(pcPick, manPick);
        if (score == 1) {
            pcScore++;
        }
        if (score == -1) {
            manScore++;
        }
        if (i++ == 4) {
            break;
        }
    }
    
    console.log(`Computer Score: ${pcScore}`);
    console.log(`Player Score: ${manScore}`);
    if (pcScore > manScore) {
        console.log("Computer wins.");
    } else if (manScore > pcScore) {
        console.log("Player wins.");
    } else {
        console.log("Draw.");
    }
}
*/

// button listeners
const btnRock = document.querySelector('#btn-r');
const btnPaper = document.querySelector('#btn-p');
const btnScissors = document.querySelector('#btn-s');
//variable for player choice, updated by eventlisteners? 

btnRock.addEventListener('click', () => {
    //make PC choice
    //call playRound() with player and pc choice
});

btnPaper.addEventListener('click', () => {
    //calls playRound() with the proper selection
});

btnScissors.addEventListener('click', () => {
    //calls playRound() with the proper selection
});