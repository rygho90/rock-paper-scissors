function computerPlay() {
    let computerRoll = Math.floor(Math.random() * (3))
    return ['ROCK', 'PAPER', 'SCISSORS'][computerRoll]
}

function playRound() {
    let playerChoice = prompt("Enter 'ROCK', 'PAPER', or 'SCISSORS':").toUpperCase()
    let computerChoice = computerPlay()
    let lossWording = `You lost the round. Computer's ${computerChoice} beat your ${playerChoice}.`
    let winWording = `You win the round! Your ${playerChoice} beat Computer's ${computerChoice}.` 

    if (playerChoice == computerChoice) {
        console.log(`Tie. You and Computer both chose ${playerChoice}.`)
        return "T"
    } 
    if (playerChoice == "ROCK") {
        if (computerChoice == "PAPER") {
            console.log(lossWording)
            return "L"
        } else {
            console.log(winWording)
            return "W"
        }
    }
    if (playerChoice == "PAPER") {
        if (computerChoice == "SCISSORS") {
            console.log(lossWording)
            return "L"
        } else {
            console.log(winWording)
            return "W"
        }
    }
    if (playerChoice == "SCISSORS") {
        if (computerChoice == "ROCK") {
            console.log(lossWording)
            return "L"
        } else {
            console.log(winWording)
            return "W"
        }
    }
}

function game() {
    playerScore = 0
    computerScore = 0
    let roundResult = "";

    for (let i=0; i < 5; i++) {
        roundResult = playRound()
        if (roundResult == "W") {
            playerScore++
        }
        if (roundResult == "L") {
            computerScore++
        }
    }

    console.log(`\nPlayer: ${playerScore}. Computer: ${computerScore}.`)
    if (playerScore == computerScore) {
        console.log("You tied!")
    } else if (playerScore > computerScore) {
        console.log("You won the game!")
    } else {
        console.log("You lost the game!")
    }
}

let playerScore = 0
let computerScore = 0

game()

