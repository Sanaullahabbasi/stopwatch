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

// ====***** Timer JS *****=======

var timerValue = document.getElementById("timer_value");


var close = document.querySelector("#close");
close.style.display = "none";
stopBtn.style.display = "none";
// texBody.style.visibility="hidden";





// ====***** Window FullScreen JS *****=======

var full = document.querySelector("#full");
full.addEventListener("click", fullScreen)

function fullScreen() {
  document.documentElement.requestFullscreen();
  var close = document.querySelector("#close");
  close.style.display = "block";
  full.style.display = "none";
}

// ====***** Window close FullScreen JS *****=======
var close = document.querySelector("#close");
close.addEventListener("click", closeFullScreen)

function closeFullScreen() {
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



export {
  hour, min, sec, milisec,
  getHours, getMinutes, getSeconds, getMilisec,
  stopWatchUI, timerUI,
  startBtn, stopBtn, resetBtn, texBody, inputField,
  interval, timerValue,
}



