function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    let resultMessage;

    if (humanChoice === computerChoice) {
        resultMessage = `It's a tie! Both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultMessage = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
        humanScore++;
    } else {
        resultMessage = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`;
        computerScore++;
    }
    document.getElementById("result").textContent = resultMessage;
    document.getElementById("human-score").textContent = humanScore;
    document.getElementById("computer-score").textContent = computerScore;
    checkWinner();
};

function checkWinner() {
    if (humanScore === 5 || computerScore === 5) {
        const gameResult = document.getElementById("game-result");
        if (humanScore === 5) {
            gameResult.textContent = "Congratulations! You won the game!";
        } else {
            gameResult.textContent = "Sorry, you lost the game. The computer won!";
        }
        disableButtons();
    }
};

function disableButtons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

document.getElementById("rock").addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("rock", computerChoice);
});

document.getElementById("paper").addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("paper", computerChoice);
});

document.getElementById("scissors").addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("scissors", computerChoice);
});


/* 
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
*/