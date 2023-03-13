// wow what a logic by me far better than on youtube's
// i am in love with this watch 

sHandR = document.getElementById('sHand');
mHandR = document.getElementById('mHand');
hHandR = document.getElementById('hHand');
let d = new Date();
let s = d.getSeconds();
let m = d.getMinutes();
let h = d.getHours();
let sDeg = s*6;
let mDeg = (m*60+s)*0.1;
let hDeg = (h*60*60+ m*60+s + s)*0.0083;

function rotateHand () 
{
    // console.log("called");
    sHandR.style.transform = `translateX(-50%) rotate(${sDeg}deg)`;
    mHandR.style.transform = `translateX(-50%) rotate(${mDeg}deg)`;
    hHandR.style.transform = `translateX(-50%) rotate(${hDeg}deg)`;
    sDeg += 6;        // 360/ 60
    mDeg += 0.1;      // 360/ 60*60 (min hands completed 1 rot in 60*60 seconds)
    hDeg += 0.0083;   // 360/ 12*60*60
}

setInterval(rotateHand, 1000);