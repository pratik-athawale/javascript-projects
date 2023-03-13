bKeysR = document.getElementsByClassName('black-key');
w = document.querySelector('.white-key').offsetWidth;
// console.log("width " + w);

// applying css to black keys 
for (let i=0; i<bKeysR.length; i++)
{
    bKeysR[i].style.left = `${w*(i+1)}px`;
    bKeysR[i].style.transform = "translateX(-50%)";

    if (i == 2 || i == 6 || i == 10){
        bKeysR[i].style.display = "none";
        bKeysR[i].style.backgroundColor = "yellow";
    }
}
// adding onclick event on black keys 
for (let i=0; i<bKeysR.length; i++)
{
    bKeysR[i].addEventListener('click', ()=> {
        if (i == 2 || i == 6 || i == 10) return;
        let x = (i < 2)? (i+1): (i < 6)? i: (i < 10)? (i-1): (i-2);
        m = new Audio(`24-piano-keys/key${x}.mp3`);
        m.play();
        // console.log(x + " played");
    })
}

// adding onclick event on white keys 
wKeysR = document.getElementsByClassName('white-key');
for (let i=0; i<wKeysR.length; i++)
{
    wKeysR[i].addEventListener('click', ()=> {
        m = new Audio(`24-piano-keys/key${i+11}.mp3`);
        m.play();
        // console.log(i+11 + " played");
    })
}

// window.addEventListener('keydown', ({keyCode}) => {
//     if (keyCode === 81){
//         m = new Audio(`24-piano-keys/key1.mp3`);
//         m.play();
//     }
// })
