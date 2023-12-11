import { 
    getHours, getMinutes, getSeconds, getMilisec,
    stopWatchUI, timerUI,
    startBtn, resetBtn, inputField, timerValue, interval,
    } from "./app.js"

    timerUI.addEventListener("click", timer)    

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
    interval = setInterval(countDown, 1000);
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
          clearInterval(interval);
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
          clearInterval(interval);
          getMinutes.innerHTML = ``;
        }
        getSeconds.innerHTML = secV + `<span>s</span>`;
        getMinutes.innerHTML = minV + `<span>m</span>`;
      }
    }
  
    
  }
  
  // ====***** Timer Reset Button JS *****=======
  
  function resetTimer() {
    clearInterval(interval);
    timerValue.style.display = "block";
    timerValue.value = "";
    getSeconds.innerHTML = ``;
    getMinutes.innerHTML = ``;
  }