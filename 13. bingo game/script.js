listA = [[17,15,9,5,19],[0,14,10,2,23],[13,24,8,11,1],[22,6,7,16,20],[3,12,21,18,4]];
listB = [[5,14,8,20,24],[3,16,17,12,2],[7,13,21,10,6],[1,18,0,23,4],[19,22,15,9,11]];
let cols = 5;
let gameOn = true;
let turn = 0;
let score = [0,0];
resultA = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
resultB = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];

tempR = matA.getElementsByTagName('td');
matAR = [];   // 2d array actually 
let z = 0;
for (let i=0; i<cols; i++)
{
    matAR[i] = [];
    for (let j=0; j<cols; j++){
        matAR[i][j] = tempR[z++];
    }
}

tempR = matB.getElementsByTagName('td');
matBR = [];   // 2d array actually 
z = 0;
for (let i=0; i<cols; i++)
{
    matBR[i] = [];
    for (let j=0; j<cols; j++){
        matBR[i][j] = tempR[z++];
    }
}

lines = [];
z = 0;
tempR = document.getElementsByClassName('line');
for (let i=0; i<2; i++){
    lines[i] = [];
    for (let j=0; j<6; j++){
        lines[i][j] = tempR[z++];
    }
}

let w = matAR[0][0].offsetWidth;
let leftColor = 'red', rightColor = 'blueviolet';
for (let i=0; i<matAR.length; i++)
{
    for (let j=0; j<matAR[0].length; j++)
    {
        matAR[i][j].addEventListener('click', () => {
            if (gameOn && turn == 0 && resultA[i][j] == 0){
                matAR[i][j].style.backgroundColor = leftColor;
                resultA[i][j] = 1;
                checkwin(resultA, i, j, 0, matAR);
        
                let v = listA[i][j];
                let x = Math.floor(v/cols);
                let y = v%cols;
                matBR[x][y].style.backgroundColor = rightColor;
                resultB[x][y] = 1;
                checkwin(resultB, x, y, 1, matBR);
                turn = 1;
                if (gameOn){
                    msg.innerText = 'turn for right';
                }
            }
            else{
                matAR[i][j].style.cursor = "pointer";
            }
        })
    }
}

for (let i=0; i<matBR.length; i++)
{
    for (let j=0; j<matBR[0].length; j++)
    {
        matBR[i][j].addEventListener('click', () => {

            if (gameOn && turn == 1 && resultB[i][j] == 0){
                matBR[i][j].style.backgroundColor = rightColor;
                resultB[i][j] = 1;
                checkwin(resultB, i, j, 1, matBR);
        
                let v = listB[i][j];
                let x = Math.floor(v/cols);
                let y = v%cols;
                matAR[x][y].style.backgroundColor = leftColor;
                resultA[x][y] = 1;
                checkwin(resultA, x, y, 0, matAR);
                turn = 0;
                if (gameOn){
                    msg.innerText = 'turn for left';
                }
            }
            else{
                matAR[i][j].style.cursor = "not-allowed";
            }
        })
    }
}

             // h v 
let counter = [[0,1],[0,1]];
function checkwin(mat, x, y, t, matR)
{ 
    // check xth row 
    {let win = true;
    for (let i=0; i<mat[0].length; i++){

        if (mat[x][i] != 1){
            win = false;
            break;
        } 
    }
    if (win){
        lines[t][counter[t][0]].style.display = 'block';
        let lw = lines[t][counter[t][0]].offsetHeight;
        // lines[t][counter[t][0]].style.backgroundColor = 'yellow';
        lines[t][counter[t][0]].style.top = `${w/2*(x*2+1) - lw/2}px`;
        counter[t][0] = 5;
        score[t]++;
    }}

    // check yth column 
    {win = true;
    for (let i=0; i<mat[0].length; i++){
        if (mat[i][y] != 1){
            win = false;
            break;
        } 
    }
    if (win){
        lines[t][counter[t][1]].style.display = 'block';
        let lw = lines[t][counter[t][1]].offsetHeight;
        // lines[t][counter[t][1]].style.backgroundColor = 'pink';
        lines[t][counter[t][1]].style.left = `${w/2*(y*2+1) - lw/2}px`;
        lines[t][counter[t][1]].style.transform = 'rotate(-90deg)';
        counter[t][1]++;
        score[t]++;
    }}

    // check top-left pointing diagonal
    {if (x == y)
    {
        win = true;
        for (let i=0; i<mat.length; i++){
            if (mat[i][i] != 1){
                win = false;
                break;
            } 
        }
        if (win){
            lines[t][3].style.display = 'block';
            let d = Math.sqrt(w*5*w*5 + w*5*w*5);
            lines[t][3].style.width = `${d}px`;
            // lines[t][3].style.backgroundColor = 'cyan'; 
            score[t]++;
        }
    }}

    // check top-right pointing diagonal
    {if (y == cols-1 - x)
    {
        win = true;
        for (let i=0; i<mat.length; i++){
            if (mat[i][cols-1-i] != 1){
                win = false;
                break;
            } 
        }
        if (win){
            lines[t][4].style.display = 'block';
            let d = Math.sqrt(2*w*5*w*5)+6;
            lines[t][4].style.width = `${d}px`;
            // lines[t][4].style.backgroundColor = 'orange'; 
            score[t]++;
        }
    }}

    if (score[0] >= 2 && score[1] >= 2){
        msg.innerText = 'match draw';
        gameOn = false;
    }
    else if (score[t] >= 2){
        let p = (t == 0)? 'left': 'right';
        msg.innerText = p + ' won';
        gameOn = false;
    }
}

resetID.addEventListener('click', () => {
    console.log('clicked reset');
    for (let i=0; i<matAR.length; i++)
    {
        for (let j=0; j<matAR[0].length; j++)
        {
            matAR[i][j].style.backgroundColor = 'rgb(101, 53, 64)';
            matBR[i][j].style.backgroundColor = 'rgb(101, 53, 64)';
            resultA[i][j] = 0;
            resultB[i][j] = 0;
            gameOn = true;
            score[0] = 0;
            score[1] = 0;
            turn = 0;
            counter = [[0,1],[0,1]];
            counter[0][0] = 0;
            counter[0][1] = 1;
            counter[1][0] = 0;
            counter[1][1] = 1;
            msg.innerText = 'turn for left';
        }
    }
    for (let a = 0; a<lines.length; a++){
        for (let b = 0; b<lines[0].length; b++){
            if (b == 0 || b == 1 || b == 2 || b == 5){
                lines[a][b].style.transform = 'none';
                lines[a][b].style.left = '0';
                lines[a][b].style.top = '100%';
            }
            else{
                lines[a][b].style.width = '40vw';
            }
            lines[a][b].style.display = 'none';
        }
    }
})

// lines[0][0].style.border = '3px solid blue';
// lines[1][1].style.border = '3px solid blue';

 





