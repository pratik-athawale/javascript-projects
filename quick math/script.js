let num1 = 0;
let num2 = 0;
let questions = 0;
const maxQuestions = 10;
let startTime = 0;
let endTime = 0;
let quizRunning = false;
let operation = '+';
let operand1 = [1, 9];
let operand2 = [1, 9];
const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const checkAnswerBtn = document.getElementById('checkAnswer');
const score = document.getElementById('score');
const division = document.getElementById('div');
const multiplication = document.getElementById('mult');
const subtraction = document.getElementById('sub');
const addition = document.getElementById('add');
let operators = [division, multiplication, subtraction, addition];


function clickBtn(x) {
    display.value = display.value + x;
    console.log(x);
}

function clearDisplay() {
    display.value = '';
}

function getRandomNumberInclusiveBoth(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function setNumbers() {
    num1 = getRandomNumberInclusiveBoth(operand1[0], operand1[1]);
    num2 = getRandomNumberInclusiveBoth(operand2[0], operand2[1]);
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
        return (num1 / num2).toFixed(1);
    }
}

function areEqualUpToFirstDecimal(str1, str2) {
    const truncatedStr1 = str1.indexOf('.') === -1 ? str1+'.0' : str1.substring(0, str1.indexOf('.') + 2);
    const truncatedStr2 = str2.indexOf('.') === -1 ? str2+'.0' : str2.substring(0, str2.indexOf('.') + 2);
  
    return truncatedStr1 === truncatedStr2;
  }

function checkAnswer() {
    if (quizRunning) {
        // console.log(display.value);
        // console.log(typeof display.value);
        let answer = display.value;
        let expectedAnswer = getExpectedAnswer();
        if (areEqualUpToFirstDecimal(answer, expectedAnswer.toString())) {
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
    else {
        display.value = eval(display.value);
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

function setOperands(range1, range2) {
    operand1 = range1;
    operand2 = range2;
    console.log(operand1);
    console.log(operand2);
}

function setEventsForToggle(toggleIndex, op1Range, op2Range) {
    const toggle1 = document.getElementById("range1");
    const toggle2 = document.getElementById("range2");
    const toggle3 = document.getElementById("range3");
    const toggle4 = document.getElementById("range4");
    const toggleIds = [toggle1, toggle2, toggle3, toggle4];
    console.log('added event for', toggleIndex);   
    
    toggleIds[toggleIndex].addEventListener('click', function() {
        
      toggle1.className = "fa-solid fa-toggle-off";
      toggle2.className = "fa-solid fa-toggle-off";
      toggle3.className = "fa-solid fa-toggle-off";
      toggle4.className = "fa-solid fa-toggle-off";
      
      toggleIds[toggleIndex].className = "fa-solid fa-toggle-on";

      setOperands(op1Range, op2Range);
      console.log(operand1);
      console.log(operand2);
      
    });
}
setEventsForToggle(0, [1, 9], [1, 9]);
setEventsForToggle(1, [1, 90], [1, 9]);
setEventsForToggle(2, [1, 99], [1, 99]);
setEventsForToggle(3, [1, 20], [1, 9]);
document.getElementById("range1").click();


setOperation('+');

