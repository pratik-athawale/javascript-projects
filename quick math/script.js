let num1 = 0;
let num2 = 0;
let questions = 0;
const maxQuestions = 10;
let startTime = 0;
let endTime = 0;
let quizRunning = false;
let operation = '+';
const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const score = document.getElementById('score');
const division = document.getElementById('division');
const multiplication = document.getElementById('multiplication');
const subtraction = document.getElementById('subtraction');
const addition = document.getElementById('addition');
let operators = [division, multiplication, subtraction, addition];


function clickBtn(x) {
    display.value = display.value + x;
    console.log(x);
}

function clearDisplay() {
    display.value = '';
}

function setNumbers() {
    num1 = Math.floor(Math.random() * 99) + 1;
    if (operation == '*' || operation == '/') {
        num2 = Math.floor(Math.random() * (9 - 2 + 1)) + 2;
    }
    else {
        num2 = Math.floor(Math.random() * 99) + 1;
    }
    // display.value = num1 + " + " + num2;
    console.log(num1 + " " + num2);
    display.value = `${num1} ${operation} ${num2}`;
    setTimeout(() => {
            display.value = '';
        }, 1000);
    questions++;
    score.innerText = "Q. " + questions;
}

function backSpace() {
    display.value = display.value.substring(0, display.value.length - 1);
}

function calculateScore() {
    endTime = performance.now();
    const timeTaken = endTime - startTime;
    const avgTime = timeTaken / 10000;
    resetQuiz();
    score.innerText = "Avg Time : " + avgTime.toFixed(2);
    console.log(`Quiz completed in ${timeTaken} milliseconds`);
    startBtn.innerText = 'Reset';
    display.value = "Quiz Over";
}

function getExpectedAnswer() {
    if (operation == '+'){
        return num1 + num2;
    }
    else if (operation == '-'){
        return num1 - num2;
    }
    else if (operation == '*'){
        return num1 * num2;
    }
    else {  // (operation == '/')
        return (num1 / num2).toFixed(2);
    }
}

function checkAnswer() {
    if (quizRunning) {
        // console.log(display.value);
        // console.log(typeof display.value);
        let answer = parseInt(display.value);
        let expectedAnswer = getExpectedAnswer();
        if (answer == expectedAnswer) {
            display.style.border = 'none';
            if (questions < maxQuestions) {
                setNumbers();
            }
            else {
                calculateScore();
            }
        }
        else {
            display.style.border = '1px solid red';
            display.value = '';
        }
    }
}

function setOperation(op) {
    console.log("set opera");
    operation = op;
    let selected = -1;
    if (operation == '/') {
        selected = 0;
    }
    else if (operation == '*') {
        selected = 1;
    }
    else if (operation == '-') {
        selected = 2;
    }
    else if (operation == '+') {
        selected = 3;
    }
    
    for (let i=0; i<4; i++) {
        operators[i].style.backgroundColor = '#f2a154';
    }
    console.log(operators[selected]);
    operators[selected].style.backgroundColor = 'green';
}

function showAgain() {
    if (quizRunning) {
        display.value = `${num1} ${operation} ${num2}`;
        setTimeout(() => {
            display.value = '';
        }, 1000);
    }
}

function resetQuiz() {
    num1 = 0;
    num2 = 0;
    questions = 0;
    startTime = 0;
    endTime = 0;
    display.value = '';
    score.innerText = 'Score';
    startBtn.innerText = 'Start';
    quizRunning = false;
    display.style.border = 'none';
    operation = '+';
    setOperation('+');
}

function startQuiz() {
    if (startBtn.innerText == 'Start') {
        quizRunning = true;
        score.innerText = 'Score';
        startBtn.innerText = 'Abort';
        startTime = performance.now();
        setNumbers();
    }
    else {
        startBtn.innerText = 'Start';
        resetQuiz();
    }
}

setOperation('+');

