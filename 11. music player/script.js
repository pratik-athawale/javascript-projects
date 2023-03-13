const music_list = [
    {
        img : 'images/stay.png',
        name : 'Stay',
        artist : 'The Kid LAROI, Justin Bieber',
        music : 'music/stay.mp3'
    },
    {
        img : 'images/fallingdown.jpg',
        name : 'Falling Down',
        artist : 'Wid Cards',
        music : 'music/fallingdown.mp3'
    },
    {
        img : 'images/faded.png',
        name : 'Faded',
        artist : 'Alan Walker',
        music : 'music/Faded.mp3'
    },
    {
        img : 'images/ratherbe.jpg',
        name : 'Rather Be',
        artist : 'Clean Bandit',
        music : 'music/Rather Be.mp3'
    }
];
console.log(Math.ceil(7));
audioObj = [];
paras = document.querySelectorAll('.info p');
let sliderR = document.getElementById('slider');
let wave = document.querySelector('.wave');
let playing = false;
let sliderValue = 0;
let loopCurr = false, loopAll = false, shuffle = false;
let interval;

for (let i=0; i<music_list.length; i++){
    audioObj[i] = new Audio(music_list[i].music);
}

let ind = 0;

play.addEventListener('click', playMusic);

prev.addEventListener('click', () => {
    audioObj[ind].pause();
    clearInterval(interval);
    ind = (ind-1+music_list.length) % music_list.length;
    updateInfo();
    if (playing){
        playing = false;
        playMusic();
    }
})

next.addEventListener('click', () => {
    audioObj[ind].pause();
    clearInterval(interval);
    ind = (ind+1) % music_list.length;
    updateInfo();
    if (playing){
        playing = false;
        playMusic();
    }
})

random.addEventListener('click', () => {
    if (shuffle == false){
        shuffle = true;
        random.style.color = 'green';
    }
    else {
        shuffle = false;
        random.style.color = 'blue';
    }
})

function playRandom(){
    audioObj[ind].pause();
    clearInterval(interval);
    ind = Math.floor(Math.random() * music_list.length);
    audioObj[ind].currentTime = 0;
    updateInfo();
    if (playing){
        playing = false;
        playMusic();
    }
}

sliderR.addEventListener('change', () => {
    currTime.innerHTML = getTime(sliderR.value);
    audioObj[ind].currentTime = sliderR.value;
    sliderValue = sliderR.value;;
})

vol.addEventListener('change', () => {
    audioObj[ind].volume = vol.value / 100;
})

repeat.addEventListener('click', () => {
    loopCurr = true;
})

repeat.addEventListener('click', () => {
    console.log('clicked '+ repeat.style.color);
    if (repeat.style.color == "blue" || repeat.style.color == ""){
        repeat.style.color = 'green';
        loopCurr = false;
        loopAll = true;
    }
    else if (repeat.innerText == "repeat"){
        repeat.innerText = "repeat_one";
        loopCurr = true;
        loopAll = false;
    }
    else{
        repeat.style.color = 'blue';
        repeat.innerText = "repeat";
        loopCurr = false;
        loopAll = false;
    }
})

function updateInfo(){
    // paras[0].innerHTML = `${ind+1}th of ${music_list.length}`;
    paras[0].innerHTML = `${ind+1} / ${music_list.length}`;
    paras[1].innerHTML = music_list[ind].name;
    paras[2].innerHTML = music_list[ind].artist;
    document.querySelector('img').src = music_list[ind].img;
    // document.querySelector('img').height = ;
    sliderR.max = Math.ceil(audioObj[ind].duration);
    sliderValue = Math.floor(audioObj[ind].currentTime);
    audioObj[ind].currentTime = sliderValue;
    sliderR.value = sliderValue;
    // currTime.innerHTML = sliderValue;
    currTime.innerHTML = getTime(sliderValue);
    console.log("to kya hai "+audioObj[ind].duration);
    durTime.innerHTML = getTime(sliderR.max);
    // durTime.innerHTML = "00:00";
}

function playMusic()
{
    if (!playing){
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');

        sliderR.max = Math.ceil(audioObj[ind].duration);
        durTime.innerHTML = getTime(sliderR.max);
        playing = true;
        wave.classList.add('loader');
        sliderValue = Math.floor(audioObj[ind].currentTime);
        audioObj[ind].currentTime = sliderValue;
        console.log(audioObj[ind].currentTime +", "+audioObj[ind].duration +", "+sliderR.max);
        interval = setInterval(() => {
            sliderValue++;
            sliderR.value = sliderValue;
            currTime.innerHTML = getTime(sliderValue);
            if (sliderValue >= sliderR.max){
                if (loopCurr){
                    console.log("replaying "+sliderValue);
                    sliderValue = 0;
                    sliderR.value = 0;
                    currTime.innerHTML = "00:00";
                    // console.log('song ended :' +audioObj[ind].currentTime);
                    audioObj[ind].currentTime = 0;
                    audioObj[ind].play();
                }
                else if (shuffle){
                    playRandom();
                }
                else if (loopAll){
                    ind1 = (ind+1) % music_list.length;
                    audioObj[ind1].currentTime = 0;
                    next.click();
                }
                else{
                    // currTime.innerHTML = "stopped";
                    clearInterval(interval);
                    currTime.innerHTML = "00:00";
                    play.classList.add('fa-play');
                    play.classList.remove('fa-pause');
                    audioObj[ind].currentTime = 0;
                    audioObj[ind].pause();
                    sliderValue = 0;
                    sliderR.value = 0;
                    playing = false; 
                    wave.classList.remove('loader');
                }
            }
        } , 1000);
        audioObj[ind].play();
    }
    else{
        audioObj[ind].pause();
        wave.classList.remove('loader');
        play.classList.add('fa-play');
        play.classList.remove('fa-pause');
        playing = false;
        clearInterval(interval);
    }
}

function getTime(x)
{
    let min = 0, sec = 0;
    min = Math.floor(x/60);
    sec = x - min*60;

    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;
    return min + ":" + sec;
}

