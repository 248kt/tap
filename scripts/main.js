const scoreDisplay = document.getElementById("score-display");
const tapBtn = document.getElementById("tap-btn");

let score = 0;

tapBtn.addEventListener('click', () => {
  score++;
  scoreDisplay.innerHTML = score;
})

