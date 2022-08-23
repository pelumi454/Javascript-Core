const durationInput = document.querySelector("#input");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

startButton.addEventListener("click", () => {
  start();
});

function startTicking() {
  const timerValue = durationInput.value;
  durationInput.value = timerValue - 1;
  if (timerValue <= 0) {
    pause;
  }
}

function start() {
  timer = setInterval(() => startTicking(), 1000);
}

pauseButton.addEventListener("click", () => {
  clearTick();
});

function clearTick() {
  clearInterval(timer);
}
