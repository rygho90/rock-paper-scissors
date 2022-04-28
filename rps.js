function computerPlay() {
    let computerRoll = Math.floor(Math.random() * (3))
    return CHOICES[computerRoll]
}

function playRound() {
    let playerChoice = prompt("Enter 'Rock', 'Paper', or 'Scissors':")
    let computerChoice = computerPlay()
    console.log(`Player chose ${playerChoice}. Computer chose ${computerChoice}.`)
}

const CHOICES = ['Rock', 'Paper', 'Scissors'];

playRound()