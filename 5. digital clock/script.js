function displayTime()
{
    let d = new Date();
    let h = d.getHours();
    if (h < 10) h = "0" + h;

    let m = d.getMinutes();
    if (m < 10) m = "0" + m;

    let s = d.getSeconds();
    if (s < 10) s = "0" + s;

    let session = (h >= 12)? "PM": "AM";
    
    document.getElementById('hoursId').innerHTML = h;
    document.getElementById('minutesId').innerHTML = m;
    document.getElementById('secondsId').innerHTML = s;
    document.getElementById('sessionId').innerHTML = session;
}

setInterval(displayTime, 10);
// The setInterval() method calls a function at specified 
// intervals (in milliseconds).


// setInterval(() => {console.log("hi");}, 1000);