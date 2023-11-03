var hour = 0;
var min = 0;
var sec = 0;
var milisec = 0;

var getHours = document.getElementById("hr");
var getMinutes = document.getElementById("min");
var getSeconds = document.getElementById("sec");
var getMilisec = document.getElementById("mil");

setInterval( function(){
    milisec++;
    getMilisec.innerHTML = milisec;
    if(milisec >= 100){
        sec++;
        getSeconds.innerHTML = sec;
        milisec = 0
    }
    else if(sec >=5){
        min++;
        getMinutes.innerHTML = min;
        sec = 0
    }
    else if(min >= 2){
hour++;
getHours.innerHTML = hour;
min = 0
    }
    
}, 10)
