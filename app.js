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
var getData = document.querySelector(".value-data");

function start() {
  getData.style.display = "none";
  startBtn.classList.add("active");
  stopBtn.classList.remove("activeRemove");
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

function stop() {
  clearInterval(interval);
  startBtn.classList.remove("active");
  stopBtn.classList.add("activeRemove");
}

function reset() {
  getData.style.display = "none";
  startBtn.classList.remove("active");
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

function fullScreen() {
  document.documentElement.requestFullscreen();
}

function getValue() {
  getData.style.display = "block";
  getData.style.display = "flex"
  getData.innerHTML += `
  <div id="hr">${hour} <span>h</span></div>
  <div id="min">${min} <span>m</span></div>
  <div id="sec">${sec} <span>s</span></div>
  <div id="mil">${milisec} </div>`;
}
