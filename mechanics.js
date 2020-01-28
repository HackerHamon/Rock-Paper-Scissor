let playerScore = 0;
let aiScore = 0;
const playerScore_span = document.getElementById("player-score");
const aiScore_span = document.getElementById("AI-score");
const score_div = document.querySelector(".score");
const results_p = document.querySelector(".results  > p");
const paper_div = document.getElementById("pr");
const scissor_div = document.getElementById("sr");
const rock_div = document.getElementById("rk");


function getaiChoice() {
    const choices = ['pr', 'sr', 'rk'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter == "pr") {
        return "Paper";
    }
    else if (letter == "sr") {
        return "Scissor";
    }
    else if (letter == "rk") {
        return "Rock";
    }

}

function wins(playerChoice, aiChoice) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    aiScore_span.innerHTML = aiScore;
    results_p.innerHTML = `${convertToWord(playerChoice)} defeats ${convertToWord(aiChoice)}.Victory!`;

}
function lose(playerChoice, aiChoice) {
    aiScore++;
    playerScore_span.innerHTML = playerScore;
    aiScore_span.innerHTML = aiScore;
    results_p.innerHTML = `${convertToWord(playerChoice)} defeats ${convertToWord(aiChoice)}.AI Scores!`;
}
function draw(playerChoice, aiChoice) {
    aiScore_span.innerHTML = aiScore;
    results_p.innerHTML = `${convertToWord(playerChoice)} is the same as ${convertToWord(aiChoice)} .It's a Tie!`;
}

function game(playerChoice) {
    const aiChoice = getaiChoice();
    console.log(aiChoice)
    switch (playerChoice + aiChoice) {
        case "rksr":
        case "prrk":
        case "srpr":
            wins(playerChoice, aiChoice);
            break;
        case "rkpr":
        case "prsr":
        case "srrk":
            lose(playerChoice, aiChoice);
            break;
        case "rkrk":
        case "prpr":
        case "srsr":
            draw(playerChoice, aiChoice);
            break;
    }
}

function main() {
    paper_div.addEventListener('click', function () {
        console.log("Paper")
        game("pr");
    })
    scissor_div.addEventListener('click', function () {
        console.log("Scissor")
        game("sr");
    })
    rock_div.addEventListener('click', function () {
        console.log("Rock")
        game("rk");
    })
}

main();