let output = 0;

function delete1(){
    let s = document.getElementById('bar').value;
    s = s.substring(0,s.length-1);
    // console.log(s);
    document.getElementById('bar').value = s;
}

function getPrev(){
    document.getElementById('bar').value += output;
}

function num(x)
{
    document.getElementById('bar').value += x;
}

function getAns()
{
    let input = document.getElementById('bar').value;
    if (input == "")
        output = "";
    else
        output = eval(input);
    // console.log(output);
    document.getElementById('bar').value = output;
}

function clearBar()
{
    document.getElementById('bar').value = "";
}