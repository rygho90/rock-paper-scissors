function computerPlay() {
    let computerRoll = Math.floor(Math.random() * (3))
    return ['ROCK', 'PAPER', 'SCISSORS'][computerRoll]
}

function checkWinner() {
    if (playerScore == 5) {
        const gameScreen = document.querySelector('.game')
        while (gameScreen.firstChild) {
            gameScreen.removeChild(gameScreen.lastChild);
        }
        const playerWin = document.createElement('div');
        playerWin.innerText = "You Win!";
        gameScreen.append(playerWin);
    }
    if (computerScore == 5) {
        const gameScreen = document.querySelector('.game')
        while (gameScreen.firstChild) {
            gameScreen.removeChild(gameScreen.lastChild);
        }
        const playerLose = document.createElement('div');
        playerLose.innerText = "You Lose!";
        gameScreen.append(playerLose);
    }
}

function playRound(playerChoice) {
    playerChoice = playerChoice.toUpperCase()
    let computerChoice = computerPlay()
    let lossWording = `You lost the round. Computer's ${computerChoice} beat your ${playerChoice}.`
    let winWording = `You win the round! Your ${playerChoice} beat Computer's ${computerChoice}.` 

    playerPick.innerText = `${playerChoice}`;
    computerPick.innerText = `${computerChoice}`;

    if (playerChoice == computerChoice) {
        roundResult.innerText = `Tie. You and Computer both chose ${playerChoice}.`;
        return;
    } 
    if (playerChoice == "ROCK") {
        if (computerChoice == "PAPER") {
            roundResult.innerText = (lossWording)
            computerScore += 1;
            computerDisplay.innerText = `Score: ${computerScore}`;
            checkWinner();
        } else {
            roundResult.innerText = (winWording)
            playerScore += 1;
            playerDisplay.innerText = `Score: ${playerScore}`;
            checkWinner();
        }
    }
    if (playerChoice == "PAPER") {
        if (computerChoice == "SCISSORS") {
            roundResult.innerText = (lossWording)
            computerScore += 1;
            computerDisplay.innerText = `Score: ${computerScore}`;
            checkWinner();
        } else {
            roundResult.innerText = (winWording)
            playerScore += 1;
            playerDisplay.innerText = `Score: ${playerScore}`;
            checkWinner();
        }
    }
    if (playerChoice == "SCISSORS") {
        if (computerChoice == "ROCK") {
            roundResult.innerText = (lossWording)
            computerScore += 1;
            computerDisplay.innerText = `Score: ${computerScore}`;
            checkWinner();
        } else {
            roundResult.innerText = (winWording)
            playerScore += 1;
            playerDisplay.innerText = `Score: ${playerScore}`;
            checkWinner();
        }
    }
}

let playerScore = 0
let computerScore = 0

/*
const buttons = document.querySelectorAll('.btn');
const results = document.querySelector(`.results`);
const roundResult = document.createElement('div');
const playerDisplay = document.createElement('div');
const computerDisplay = document.createElement('div');
roundResult.innerText = `\n`;
playerDisplay.innerText = `Player: ${playerScore}`;
computerDisplay.innerText = `Computer: ${computerScore}`;
results.append(roundResult);
results.append(playerDisplay);
results.append(computerDisplay);
*/

const buttons = document.querySelectorAll('.btn'); 
const roundResult = document.querySelector('.round-result');
const playerDisplay = document.querySelector('.player-display');
const computerDisplay = document.querySelector('.computer-display');
const playerPick = document.querySelector('.player-pick');
const computerPick = document.querySelector('.computer-pick')

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      playRound(e.target.id);
    });
  });



