let userScore = 0;
let computerScore = 0;

const rock_div = document.getElementById("r");
rock_div.addEventListener("click", () => startGame("r"));

const paper_div = document.getElementById("p");
paper_div.addEventListener("click", () => startGame("p"));

const scissors_div = document.getElementById("s");
scissors_div.addEventListener("click", () => startGame("s"));

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};

function changeToWord(letter) {
    if (letter === 'r') {
        return 'rock'
    }
    if (letter === 'p') {
        return 'paper'
    }
    return 'scissors';
};

function startGame(userChoice) {

    const result_p = document.querySelector(".result > p");
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            userScore++;
            result_p.innerHTML = "You chose " + changeToWord(userChoice) + " the computer chose " + changeToWord(computerChoice) + ". You win.";
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            computerScore++;
            result_p.innerHTML = "You chose " + changeToWord(userChoice) + " the computer chose " + changeToWord(computerChoice) + ". You lost.";
            break;
        case 'rr':
        case 'ss':
        case 'pp':
            result_p.innerHTML = "Both you and the computer chose " + changeToWord(userChoice) + ". It's a tie.";
            break;
    }

    const userScore_span = document.getElementById("user-score");
    userScore_span.innerHTML = userScore;

    const computerScore_span = document.getElementById("computer-score");
    computerScore_span.innerHTML = computerScore;
}

function displayFinalScore() {
    const paragraphEl = document.createElement('P');
    paragraphEl.className = 'finalScoreDisplay';
    paragraphEl.textContent = `Final score is ${userScore} to ${computerScore}. You win the game!`;

    const buttonEl = document.createElement('BUTTON');
    buttonEl.className = 'finished-button';
    buttonEl.addEventListener('click', () => {
        window.location.reload();
    });
    buttonEl.textContent = 'Play again?'

    if (userScore > computerScore) {
        paragraphEl.textContent = `Final score is ${userScore} to ${computerScore}. You win the game!`;
    } else if (userScore != 0 && userScore === computerScore) {
        paragraphEl.textContent = `Final score is ${userScore} to ${computerScore}. It's a tie.`;
    } else if (userScore == 0 && computerScore == 0) {
        paragraphEl.textContent = `Dude... You haven't even played yet. I mean it's kinda like...`;
        buttonEl.textContent = `At least try?`;
    } else {
        paragraphEl.textContent = `Final score is ${userScore} to ${computerScore}. Hate to say it but you lost the game.`;
    }

    const finalScore_div = document.getElementById("finalScore_div");
    finalScore_div.appendChild(paragraphEl);
    finalScore_div.appendChild(buttonEl);
};