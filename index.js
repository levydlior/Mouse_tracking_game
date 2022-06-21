const timeDisplay = document.querySelector("#timer");
const scoreDisplay = document.querySelector("#score");
const target = document.querySelector("#target");
const startGame = document.querySelector("#start");
const startButton = document.querySelector('#start')

let isRunning = false;

const startButtonActivation = () => {
  if (!isRunning && startGame.innerText === "Start") {
    startGame.innerText = "Restart";
    isRunning = true;
    startGame.disabled = true
  } else if (
    !isRunning &&
    startGame.innerText === "Restart" &&
    timeDisplay.innerText === "0"
  ) {
    timeDisplay.innerText = 10;
    isRunning = true;
    scoreDisplay.innerText = 0;
    target.style.right = "-30rem";
    target.style.bottom = "-19rem";
    startGame.disabled = true
  }
};

const runGame = () => {
  if (!isRunning) {
    startButtonActivation();
    countDown();
  }
};

startGame.addEventListener("click", () => {
  runGame();
});

const targetLocationGenerator = (min, max) => {
  let number = Math.random() * (min - max);
  return number;
};
const movingTarget = () => {
  target.style.right = targetLocationGenerator(-59.4, -0) + "rem";
  target.style.bottom = targetLocationGenerator(-34.8, -0) + "rem";
};

const increaseDifficulty = () => {
  if (scoreDisplay.innerText < 5) {
    timeDisplay.innerText = 10;
    target.style.transition = "2s";
  } else if (scoreDisplay.innerText < 10) {
    timeDisplay.innerText = 8;
    target.style.transition = "1.5s";
  } else if (scoreDisplay.innerText < 15) {
    timeDisplay.innerText = 5;
    target.style.transition = "1.3s";
  } else if (scoreDisplay.innerText < 20) {
    timeDisplay.innerText = 3;
    target.style.transition = "1s";
  } else if (scoreDisplay.innerText < 25) {
    timeDisplay.innerText = 1;
    target.style.transition = "0s";
  }
};

const countDown = () => {
  const countDownTimer = setInterval(() => {
    if (timeDisplay.innerText > 0) {
      timeDisplay.innerText--;
    } else if (timeDisplay.innerText === "0") {
      isRunning = false;
      clearInterval(countDownTimer);
      startGame.disabled = false
    }
  }, 1000);
};

target.addEventListener("click", () => {
  if (isRunning) {
    movingTarget();
    scoreDisplay.innerText++;
    increaseDifficulty();
  }
});
