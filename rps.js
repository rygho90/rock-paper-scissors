function computerPlay() {
    let computerRoll = Math.floor(Math.random() * (3))
    return ['ROCK', 'PAPER', 'SCISSORS'][computerRoll]
}

function checkWinner() {
    if (playerScore == 5) {
        playerDisplay.innerText = 'First to 5!'
        computerDisplay.innerText = 'You win!'
        playerScore = 0
        computerScore = 0
    }
    if (computerScore == 5) {
        playerDisplay.innerText = 'Computer is first to 5.'
        computerDisplay.innerText = 'You lose!'
        playerScore = 0
        computerScore = 0
    }
}


function playRound(playerChoice) {
    playerChoice = playerChoice.toUpperCase()
    let computerChoice = computerPlay()
    let lossWording = `You lost the round. Computer's ${computerChoice} beat your ${playerChoice}.`
    let winWording = `You win the round! Your ${playerChoice} beat Computer's ${computerChoice}.` 

    if (playerChoice == computerChoice) {
        roundResult.innerText = `Tie. You and Computer both chose ${playerChoice}.`;
        return;
    } 
    if (playerChoice == "ROCK") {
        if (computerChoice == "PAPER") {
            roundResult.innerText = (lossWording)
            computerScore += 1;
            computerDisplay.innerText = `Computer: ${computerScore}`;
            checkWinner();
        } else {
            roundResult.innerText = (winWording)
            playerScore += 1;
            playerDisplay.innerText = `Player: ${playerScore}`;
            checkWinner();
        }
    }
    if (playerChoice == "PAPER") {
        if (computerChoice == "SCISSORS") {
            roundResult.innerText = (lossWording)
            computerScore += 1;
            computerDisplay.innerText = `Computer: ${computerScore}`;
        } else {
            roundResult.innerText = (winWording)
            playerScore += 1;
            playerDisplay.innerText = `Player: ${playerScore}`;
        }
    }
    if (playerChoice == "SCISSORS") {
        if (computerChoice == "ROCK") {
            roundResult.innerText = (lossWording)
            computerScore += 1;
            computerDisplay.innerText = `Computer: ${computerScore}`;
        } else {
            roundResult.innerText = (winWording)
            playerScore += 1;
            playerDisplay.innerText = `Player: ${playerScore}`;
        }
    }
}

let playerScore = 0
let computerScore = 0

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

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      playRound(e.target.id);
    });
  });



