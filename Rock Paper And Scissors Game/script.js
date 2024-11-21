let score = JSON.parse(localStorage.getItem("score")) || {
  win: 0,
  loss: 0,
  tie: 0,
};

function updateScore() {
  document.querySelector(
    ".score-points"
  ).innerHTML = `${score.win} Wins | ${score.loss} Loses | ${score.tie} Ties`;
}

function playGame(userChoice) {
  let randomValue = Math.random();
  let computerChoice = "";

  if (randomValue >= 0 && randomValue < 1 / 3) {
    computerChoice = "Rock";
  } else if (randomValue >= 1 / 3 && randomValue < 2 / 3) {
    computerChoice = "Paper";
  } else if (randomValue >= 2 / 3 && randomValue < 1) {
    computerChoice = "Scissors";
  }

  let result = "";
  if (userChoice === computerChoice) {
    result = "Tie";
  } else if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissors" && computerChoice === "Paper")
  ) {
    result = "You Won!!!";
  } else {
    result = "Unfortunately, You Lose!";
  }

  if (result === "You Won!!!") {
    score.win += 1;
  } else if (result === "Unfortunately, You Lose!") {
    score.loss += 1;
  } else if (result === "Tie") {
    score.tie += 1;
  }

  document.querySelector(".js-moves").innerHTML = `You
  <img src="Images/${userChoice}-emoji.png" alt="" class="move-icon" />
  <img src="Images/${computerChoice}-emoji.png" alt="" class="move-icon" />
  Computer`;
  document.querySelector(".op-result").innerHTML = `${result}`;
  updateScore();

  localStorage.setItem("score", JSON.stringify(score));

}
