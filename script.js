// Timer
let timer;
let timerDisplay = document.getElementById('timerDisplay');
let startTimerButton = document.getElementById('startTimer');
let pauseTimerButton = document.getElementById('pauseTimer');
let resetTimerButton = document.getElementById('resetTimer');

let timerSeconds = 0;
let timerMinutes = 0;
let timerHours = 0;

startTimerButton.addEventListener('click', startTimer);
pauseTimerButton.addEventListener('click', pauseTimer);
resetTimerButton.addEventListener('click', resetTimer);

function startTimer() {
  timer = setInterval(updateTimer, 1000);
  startTimerButton.disabled = true;
}

function pauseTimer() {
  clearInterval(timer);
  startTimerButton.disabled = false;
}

function resetTimer() {
  clearInterval(timer);
  timerSeconds = 0;
  timerMinutes = 0;
  timerHours = 0;
  timerDisplay.textContent = '00:00:00';
  startTimerButton.disabled = false;
}

function updateTimer() {
  timerSeconds++;
  if (timerSeconds >= 60) {
    timerSeconds = 0;
    timerMinutes++;
    if (timerMinutes >= 60) {
      timerMinutes = 0;
      timerHours++;
    }
  }

  timerDisplay.textContent = `${formatTime(timerHours)}:${formatTime(timerMinutes)}:${formatTime(timerSeconds)}`;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}


// Stopwatch
let stopwatch;
let stopwatchDisplay = document.getElementById('stopwatchDisplay');
let startStopwatchButton = document.getElementById('startStopwatch');
let pauseStopwatchButton = document.getElementById('pauseStopwatch');
let resetStopwatchButton = document.getElementById('resetStopwatch');

let stopwatchSeconds = 0;
let stopwatchMinutes = 0;
let stopwatchHours = 0;

startStopwatchButton.addEventListener('click', startStopwatch);
pauseStopwatchButton.addEventListener('click', pauseStopwatch);
resetStopwatchButton.addEventListener('click', resetStopwatch);

function startStopwatch() {
  stopwatch = setInterval(updateStopwatch, 1000);
  startStopwatchButton.disabled = true;
}

function pauseStopwatch() {
  clearInterval(stopwatch);
  startStopwatchButton.disabled = false;
}

function resetStopwatch() {
  clearInterval(stopwatch);
  stopwatchSeconds = 0;
  stopwatchMinutes = 0;
  stopwatchHours = 0;
  stopwatchDisplay.textContent = '00:00:00';
  startStopwatchButton.disabled = false;
}

function updateStopwatch() {
  stopwatchSeconds++;
  if (stopwatchSeconds >= 60) {
    stopwatchSeconds = 0;
    stopwatchMinutes++;
    if (stopwatchMinutes >= 60) {
      stopwatchMinutes = 0;
      stopwatchHours++;
    }
  }

  stopwatchDisplay.textContent = `${formatTime(stopwatchHours)}:${formatTime(stopwatchMinutes)}:${formatTime(stopwatchSeconds)}`;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
