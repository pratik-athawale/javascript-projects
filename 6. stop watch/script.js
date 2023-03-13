// setInterval calls a function repeatedly 
// clearInterval stops it, for that it needs the ref of the action
// which setInterval returns

let tens = 0;
let seconds = 0;
let minutes = 0;
let tensR = document.getElementById('tensId');
let secondsR = document.getElementById('secId');
let minutesR = document.getElementById('minId');

let startR = document.getElementById('startId');
let stopR = document.getElementById('stopId');
let resetR = document.getElementById('resetId');
let interval;

startR.addEventListener('click', () => {
    interval = setInterval(startTimer, 10);
    startR.disabled = true;
})


stopR.addEventListener('click', () => {
    clearInterval(interval);
    startR.disabled = false;
})

resetR.addEventListener('click', () => {
    clearInterval(interval);
    tens = 0;
    seconds = 0;
    tensR.innerHTML = "00";
    secondsR.innerHTML = "00";
    startR.disabled = false;
})

function startTimer()
{
    tens++;

    // tens
    if (tens < 10){
        tensR.innerHTML = "0" + tens;
    }
    else if (tens == 100){
        tens = 0;
        seconds++;
        tensR.innerHTML = "00";
    }
    else{
        tensR.innerHTML = tens;
    }

    // seconds 
    if (seconds < 10){
        secondsR.innerHTML = "0" + seconds;
    }
    else if (seconds == 60){
        seconds = 0;
        minutes++;
        secondsR.innerHTML = "00";
    }
    else{
        secondsR.innerHTML = seconds;
    }

    // minutes
    if (minutes < 10){
        minutesR.innerHTML = "0" + minutes;
    }
    else{
        minutesR.innerHTML = minutes;
    }
}

