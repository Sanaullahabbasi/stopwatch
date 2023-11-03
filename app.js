var hour = 0;
var min = 0;
var sec = 0;
var milisec = 0;

var getHours = document.getElementById("hr");
var getMinutes = document.getElementById("min");
var getSeconds = document.getElementById("sec");
var getMilisec = document.getElementById("mil");
var interval;

var startBtn = document.querySelector(".startbtn");
var stopBtn = document.querySelector(".stopbtn");
var resetBtn = document.querySelector(".resetbtn");

function start() {
  startBtn.classList.add("active");
  stopBtn.classList.remove("activeRemove");
  interval = setInterval(function () {
    milisec++;
    getMilisec.innerHTML = milisec;
    if (milisec >= 100) {
      sec++;
      getSeconds.innerHTML = sec;
      milisec = 0;
    } else if (sec >= 5) {
      min++;
      getMinutes.innerHTML = min;
      sec = 0;
    } else if (min >= 2) {
      hour++;
      getHours.innerHTML = hour;
      min = 0;
    }
  }, 10);
}

function stop() {
  clearInterval(interval);
  startBtn.classList.remove("active");
  stopBtn.classList.add("activeRemove");
}

function reset() {
//   startBtn.classList.remove("active");
  hour = 0;
  min = 0;
  sec = 0;
  milisec = 0;
  getHours.innerHTML = hour + "0";
  getMinutes.innerHTML = min + "0";
  getSeconds.innerHTML = sec + "0";
  getMilisec.innerHTML = milisec + "0";
}
