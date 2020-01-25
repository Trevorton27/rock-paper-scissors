let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const finalScore_div = document.getElementById("finalScore_div");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};

function changeToWord(letter) {
    if(letter === 'r') {
        return 'rock'
    }
    if(letter === 'p') {
        return 'paper'
    }
    return 'scissors';
};

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = "You chose " + changeToWord(userChoice) + " the computer chose " + changeToWord(computerChoice) + ". You win.";
};

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = "You chose " + changeToWord(userChoice) + " the computer chose " + changeToWord(computerChoice) + ". You lost.";
};

function tie(userChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = "Both you and the computer chose " + changeToWord(userChoice) + ". It's a tie.";
};

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice);
            break;
        case 'rr':
        case 'ss':
        case 'pp':
            tie(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener("click", () => game("r"));

    paper_div.addEventListener("click", () => game("p"));

    scissors_div.addEventListener("click", () => game("s"));
};

function displayFinalScore() {

    const userWins = `<p class="finalScoreDisplay" >Final score is ${userScore} to ${computerScore}. You win the game!<p>
    <button class="finished-button" onclick="window.location.reload();">Play Again</button>`;
    const computerWins = `<p>Final score is ${userScore} to ${computerScore}. Hate to say it but you lost the game.</p>
    <button class="finished-button" onclick="window.location.reload();">Play Again</button>`;
    const tie = `<p>Final score is ${userScore} to ${computerScore}. It's a tie.</p>
    <button class="finished-button" onclick="window.location.reload();">Play Again</button>`;
    const bro = `<p>Bro? You haven't even played yet? I mean it's kinda like... Just sayin.</p>
    <button class="finished-button" onclick="window.location.reload();">At least try?</button>`;
    if(userScore > computerScore) {
       finalScore_div.innerHTML = userWins;
    } else if (userScore !=0 && userScore === computerScore) {
        finalScore_div.innerHTML = tie;
    } else if (userScore == 0 && computerScore == 0) {
        finalScore_div.innerHTML = bro;
    } else  {
        finalScore_div.innerHTML = computerWins;
    }
};

main();