colors = document.getElementsByClassName('colorBox');
chancesLeft = 3;
let pickedColor;

generateRandomColors();

newColorId.addEventListener('click', generateRandomColors);

function generateRandomColors()
{
    for (let i=0; i<6; i++)
    {
        c = getRandomColor();
        colors[i].style.backgroundColor = c;
    }
    chancesLeft = 3;
    newColorId.innerHTML = "New Colors";
    chancesId.innerText = "3 chances left";
    messageId.innerHTML = "";
    pickedColor = pickColor();
    document.querySelector('#heading h1').innerHTML = pickedColor;
}

function getRandomColor()
{
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);

    return "rgb(" + r +", " + g + ", " + b + ")";
}

function pickColor()
{
    let i = Math.floor(Math.random() * colors.length);
    return colors[i].style.backgroundColor;
}

// onclick on colorBoxes
for (let i = 0; i<colors.length; i++)
{
    colors[i].addEventListener('click', () => {

        if (chancesLeft == 0) return;

        chancesLeft--;
        if (colors[i].style.backgroundColor == pickedColor){
            delclareWin();
        }
        else{
            if (chancesLeft == 0){
                messageId.innerText = "You lost!";
                newColorId.innerHTML = "Play Again";
            }
            else
                messageId.innerText = "Try Again!";
            chancesId.innerText = chancesLeft + " chances left";
            colors[i].style.backgroundColor = "rgb(36, 30, 30)";
        }
    })
}

// onmouseover
for (let i=0; i<colors.length; i++)
{
    colors[i].addEventListener('mouseover', () => {
        if (chancesLeft > 0){
            colors[i].style.cursor = "pointer";
        }
        else{
            colors[i].style.cursor = "not-allowed";
        }
    })
}

function delclareWin(){
    for (let i=0; i<colors.length; i++)
    {
        messageId.innerText = "Correct";
        newColorId.innerHTML = "Play Again";
        colors[i].style.backgroundColor = pickedColor;
    }
}