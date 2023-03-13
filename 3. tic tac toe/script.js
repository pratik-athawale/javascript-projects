cells = document.getElementsByClassName("cell");
let turn = 'X', moves = 0;
let gameover = false;
let audioTurn = new Audio("ting.mp3");
let cellswon; // stores indices of cells won
// console.log('file connected');

function changeTurn(){
    turn = (turn == 'X')? '0': 'X';
    if (!gameover)
        document.getElementById('info').innerText = `turn for ${turn}`;
}

function checkWin()
{
    // cells = document.getElementsByClassName("cell");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for (let i=0; i<wins.length; i++)
    {
        let a = cells[wins[i][0]].innerText;
        let b = cells[wins[i][1]].innerText;
        let c = cells[wins[i][2]].innerText;

        if (a == b && b == c && c != ''){
            console.log("won");
            cellswon = [wins[i][0], wins[i][1], wins[i][2]];
            cells[wins[i][0]].style.color = "blue";
            cells[wins[i][1]].style.color = "blue";
            cells[wins[i][2]].style.color = "blue";
            gameover = true;
            document.getElementById("info").innerText = `${turn} won`;
        }
    }
    if (!gameover && moves >= 9){
        document.getElementById('info').innerText = 'its a Draw';
        gameover = true;
    }
}

for (let i=0; i<cells.length; i++)
{
    cells[i].addEventListener('mouseover', () => {
        // if (gameover || cells[i].innerText != ''){
        if (gameover){
            cells[i].style.backgroundColor = "lightcoral";
            cells[i].style.cursor = "not-allowed";
        }
        else{
            cells[i].style.backgroundColor = "lightgreen";
            cells[i].style.cursor = "pointer";
        }
    })

    cells[i].addEventListener('mouseout', () => {
        cells[i].style.backgroundColor = "white";
        console.log("event added");
    })
}

for (let i=0; i<cells.length; i++)
{
    // console.log('inside loop');
    cells[i].addEventListener('click', () => {
        // console.log('click hua');
        if (!gameover && cells[i].innerText == ''){
            cells[i].innerText = turn;
            moves++;
            audioTurn.play();
            checkWin();
            changeTurn();
        }
    })
}

// reset 
// this worked without document.getElementById('reset')
reset.addEventListener('click', () => {
    for (let i=0; i<cells.length; i++){
        cells[i].innerText = '';
    }
    document.getElementById('info').innerText = 'turn for X';
    turn = 'X';
    moves = 0;
    gameover = false;

    cells[cellswon[0]].style.color = "black";
    cells[cellswon[1]].style.color = "black";
    cells[cellswon[2]].style.color = "black";
})

