import { 
    hour, min, sec, milisec,
    getHours, getMinutes, getSeconds, getMilisec,
    stopWatchUI, timerUI,
    startBtn, stopBtn, resetBtn, texBody, inputField,
    interval, 
} from "./app.js"


stopWatchUI.addEventListener("click", stopwatch)

function stopwatch() {
    getMinutes.innerHTML = ``;
    getSeconds.innerHTML = ``;
    getMilisec.innerHTML = ``;
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