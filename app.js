const userScore = 0;
const computerScore = 0;
const userScore_Span = document.getElementById("user-score");
const computerScore_Span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

console.log(getComputerChoice());
function game(userChoice) {
    const computerChoice = getComputerChoice();
    console.log("The computers choice is " + computerChoice);
    console.log("Your choice is " + userChoice);
}

function main() {
rock_div.addEventListener("click", () => game("r"));

paper_div.addEventListener("click", () => game("p"));

scissors_div.addEventListener("click", () => game("s"));

};

main();