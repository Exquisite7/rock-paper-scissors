function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    const validChoices = ["rock", "paper", "scissors"];
    let userInput = "";

    while (!validChoices.includes(userInput.toLowerCase())) {
        userInput = prompt("Please enter your choice (rock, paper or scissors):");
        if (userInput === null) {
            console.log("User cancelled the prompt.");
            return null;
        }
        userInput = userInput.toLowerCase();
    }
    return userInput;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}.`);
        return;
    }
    const winMessage = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
    const loseMessage = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`;

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(winMessage);
        humanScore++;
    } else {
        console.log(loseMessage);
        computerScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        if (humanChoice === null) {
            console.log("Game aborted by the user.")
            return;
        }

const computerChoice = getComputerChoice();
console.log(`Round ${i + 1}:`)
console.log("Computer choice:", computerChoice);
console.log("Your choice:", humanChoice);
playRound(humanChoice, computerChoice);
console.log("Human score:", humanScore);
console.log("Computer score:", computerScore);
console.log("-------------------------------");
    }
}

playGame();
