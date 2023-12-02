// ====***** Stopwatch JS *****=======

var hour = 0;
var min = 0;
var sec = 0;
var milisec = 0;

var getHours = document.getElementById("hr");
var getMinutes = document.getElementById("min");
var getSeconds = document.getElementById("sec");
var getMilisec = document.getElementById("mil");
var texBody = document.getElementById("textBody");
var interval;

var startBtn = document.querySelector("#start");
var stopBtn = document.querySelector("#stop");
var resetBtn = document.querySelector("#reset");
var stopWatchUI = document.getElementById("Stopwatch");
var timerUI = document.getElementById("timer");
var inputField = document.querySelector(".input_field");



var close = document.querySelector("#close");
close.style.display = "none";
stopBtn.style.display = "none";
// texBody.style.visibility="hidden";


function stopwatch() {
  stopWatchUI.style.borderBottom = "2px solid #1a73e8";
  stopWatchUI.style.color = "#1a73e8";
  timerUI.style.borderBottom= "none";
  timerUI.style.color = "black";
  startBtn.style.display="block"; 
  stopBtn.style.display="none"; 
  resetBtn.style.display="block"; 
  texBody.style.visibility="visible";
  inputField.style.display="none";
  getHours.style.display="block";
  getMinutes.style.display="block";
  getSeconds.style.display="block";
  getMilisec.style.display="block";
  startBtn.addEventListener("click", start);
  stopBtn.addEventListener("click", stop);
  resetBtn.addEventListener("click", reset);
}

// ====***** Stopwatch Start Button JS *****=======

function start() {
  startBtn.style.display = "none";
  stopBtn.style.display = "block";
  getMilisec.innerHTML = `00
  `
  getSeconds.classList.remove("sec_blue")
  interval = setInterval(function () {
    milisec++;
    getMilisec.innerHTML = milisec;
    if (milisec >= 100) {
      sec++;
      getSeconds.innerHTML = sec + `<span>s</span>`;
      milisec = 0;
    } else if (sec >= 60) {
      min++;
      getMinutes.innerHTML = min + `<span>m</span>`;
      sec = 0;
    } else if (min >= 60) {
      hour++;
      getHours.innerHTML = hour + `<span>h</span>`;
      min = 0;
    }
  }, 10);
}
// ====***** Stopwatch Stop Button JS *****=======

function stop() {
  clearInterval(interval);
  startBtn.style.display = "block";
  stopBtn.style.display = "none";
}

// ====***** Stopwatch Reset Button JS *****=======


function reset() {
  clearInterval(interval);
  hour = 0;
  min = 0;
  sec = 0;
  milisec = 0;
  getHours.innerHTML = "";
  getMinutes.innerHTML = "";
  getSeconds.innerHTML = "";
  getMilisec.innerHTML = milisec + "0";
}


// ====***** Window FullScreen JS *****=======

function fullScreen() {
  document.documentElement.requestFullscreen();
  var close = document.querySelector("#close");
  close.style.display = "block";
  var full = document.querySelector("#full");
  full.style.display = "none";
}

// ====***** Window close FullScreen JS *****=======

function closeFullScreen() {
  var close = document.querySelector("#close");
  close.style.display = "none";
  var full = document.querySelector("#full");
  full.style.display = "block";
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
  }
}


// ====***** Timer JS *****=======

var timer;
var timerValue = document.getElementById("timer_value");



function timer(){
  timerUI.style.borderBottom= "2px solid #1a73e8";
  timerUI.style.color = "#1a73e8";
  stopWatchUI.style.borderBottom = "none";
  stopWatchUI.style.color = "black";
  inputField.style.display="block";
  getHours.style.display="none";
  getMinutes.style.display="none";
  getSeconds.style.display="block";
  getMilisec.style.display="none";
  getSeconds.classList.add("sec_blue");
  startBtn.addEventListener("click", startTimer);
  resetBtn.addEventListener("click", resetTimer);
}

// ====***** Timer Start Button JS *****=======

function startTimer() {

  var getValue = timerValue.value;
  var minValue = parseInt(getValue.slice(0, 1));
  var secValue = parseInt(getValue.slice(1, 3));
  var minV = parseInt(getValue.slice(0, 2));
  var secV = parseInt(getValue.slice(2, 4));
  timerValue.style.display = "none";
  function countDown() {
    if (timerValue.value.length <= 2) {
      getValue--;
      getSeconds.innerHTML = getValue + `<span>s</span>`;
      if (getValue < 1) {
        getSeconds.innerHTML = `<h1>Time Out</h1>`;
      }
    } else if (timerValue.value.length === 3) {
      getMinutes.style.display="block";
      getSeconds.style.display="block";
      if (secValue < 1) {
        secValue = 59;
        minValue--;
        } else {
        secValue--;
      }

      getSeconds.innerHTML = secValue + `<span>s</span>`;
      getMinutes.innerHTML = minValue + `<span>m</span>`;
      if (minValue < 1 && secValue < 1) {
        getSeconds.innerHTML = `<h1>Time Out</h1>`;
        clearInterval(timer);
        getMinutes.innerHTML = ``;
      }
    } else if (timerValue.value.length === 4) {
      getMinutes.style.display="block";
      getSeconds.style.display="block";
      if (secV < 1) {
        secV = 59;
        minV--;
      } else  {
        secV--;
      }
      if (minV < 1 && secV < 1) {
        getSeconds.innerHTML = `<h1>Time Out</h1>`;
        clearInterval(timer);
        getMinutes.innerHTML = ``;
      }
      getSeconds.innerHTML = secV + `<span>s</span>`;
      getMinutes.innerHTML = minV + `<span>m</span>`;
    }
  }

  timer = setInterval(countDown, 1000);
}

// ====***** Timer Reset Button JS *****=======

function resetTimer() {
  clearInterval(timer);
  timerValue.style.display = "block";
  timerValue.value = "";
  getSeconds.innerHTML = ``;
  getMinutes.innerHTML = ``;
}

