// global variables
let playerScore = 0;
let compScore = 0; 

// functions
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

function playRound(pcPick, manPick) {
    // 0 == draw, 1 == pc wins, -1 == player wins
    let winner = 0;

    updateChoice(manPick, pcPick);

    let pc = pcPick.slice(0,1);
    let man = manPick.slice(0,1);

    if (man == pc) {
    }
    if (man == 'R') {
        if (pc == 'P') {
            winner = 1;
        }
        if (pc == 'S') {
            winner = -1;
        }
    }
    if (man == 'P') {
        if (pc == 'S') {
            winner = 1;
        }
        if (pc == 'R') {
            winner = -1;
        }
    }
    if (man == 'S') {
        if (pc == 'R') {
            winner = 1;
        }
        if (pc == 'P') {
            winner = -1;
        }
    } 

    return winner; 
}

function updateRound(results) {
    if (results === -1) {
        playerScore++; 
        displayOutcome('PLAYER WINS ROUND');
    } else if (results === 1) {
        compScore++; 
        displayOutcome('COMPUTER WINS ROUND');
    } else {
        displayOutcome('DRAW');
    }
    updateScore();
};

function displayOutcome(inputString) {
    let result = document.querySelector('.verdict p');
    result.textContent = inputString; 
}; 

function updateScore() {
    let playerScoreText = document.querySelector('.player-choice .score');
    let compScoreText = document.querySelector('.comp-choice .score');
    playerScoreText.textContent = `${playerScore} points`;
    compScoreText.textContent = `${compScore} points`;
    
    if ((playerScore == 5) || (compScore == 5)) {
        endGame();
    };
};

function endGame() {
    if (playerScore > compScore) {
        displayOutcome("PLAYER WINS GAME")
    } else {
        displayOutcome("COMPUTER WINS GAME")
    };
    removeButtons();
};

function removeButtons() {
    let btns = document.querySelectorAll('button');
    let btnContainer = document.querySelector('.main-container');
    btns.forEach((button) => {
        button.disabled = true;
    });
}

function updateChoice(playerChoice, compChoice) {
    let playerChoiceText = document.querySelector('.player-choice .selection');
    let compChoiceText = document.querySelector('.comp-choice .selection');
    playerChoiceText.textContent = playerChoice.toUpperCase();
    compChoiceText.textContent = compChoice.toUpperCase();
};

// button listeners
const btnRock = document.querySelector('#btn-r');
const btnPaper = document.querySelector('#btn-p');
const btnScissors = document.querySelector('#btn-s');

btnRock.addEventListener('click', () => {
    let playerChoice = 'Rock';
    let compChoice = computerPlay(); 
    let results = playRound(compChoice, playerChoice);
    updateRound(results);
});

btnPaper.addEventListener('click', () => {
    let playerChoice = 'Paper';
    let compChoice = computerPlay(); 
    let results = playRound(compChoice, playerChoice);
    updateRound(results);
});

btnScissors.addEventListener('click', () => {
    let playerChoice = 'Scissors';
    let compChoice = computerPlay(); 
    let results = playRound(compChoice, playerChoice);
    updateRound(results);
});