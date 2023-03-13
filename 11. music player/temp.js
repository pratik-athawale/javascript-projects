let x = 0;
let sliderR = document.getElementById("vol");
function updateSlider()
{
    sliderR.value = x;
    // x = (x+1)%60;
    x++;
    if (x < 60){
        info.innerHTML = x;
    }
    else {
        clearInterval(interval);
    }
    console.log('function called');
}
let interval = setInterval(updateSlider, 1000);


// step = 1/duration * 100;
