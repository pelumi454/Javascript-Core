const durationInput = document.querySelector("#input");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

startButton.addEventListener("click", () => {
    start();
});

function startTicking() {
    const timerValue = (durationInput.value - 1)
    console.log(timerValue)
}

function start(){
    timer = setInterval(()=>startTicking(), 1000)
}

pauseButton.addEventListener('click', () => {
    clearInterval(timer)
})

