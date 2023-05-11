inputs = [false, false, false, false, false, false, false, false, false, false];
ioArr = document.getElementsByClassName('io');
// uname 
{
    uname = document.getElementById('uname');
    unameInp = document.querySelector('#uname input');

    unameInp.addEventListener('input', () => {
        if (isAlphanumeric(unameInp.value)){
            setSuccess(uname, unameInp);
            inputs[0] = true;
        }
        else{
            setWrong(uname, unameInp, 'invalid username');
            inputs[0] = false;
        }
    })
}
// email 
{
    email = document.getElementById('email');
    emailInp = document.querySelector('#email input');
    
    emailInp.addEventListener('input', () => {
        if (isEmailValid(emailInp.value)){
            setSuccess(email, emailInp);
            inputs[1] = true;
        }
        else{
            setWrong(email, emailInp, 'invalid email');
            inputs[1] = false;
        }
    })
}
// mobile 
{
    mobile = document.getElementById('mobile');
    mobileInp = document.querySelector('#mobile input');
    
    mobileInp.addEventListener('input', () => {
        if (isMobileValid(mobileInp.value)){
            setSuccess(mobile, mobileInp);
            inputs[2] = true;
        }
        else{
            setWrong(mobile, mobileInp, 'invalid mobile number');
            inputs[2] = false;
        }
    })
}

// gender
{
    gender = document.getElementById('gender');
    genderInp = document.querySelectorAll('#gender input');
    
    genderInp[0].addEventListener('click', () => {
        inputs[3] = true;
        setSuccessOnly(gender);
        genderInp[1].checked = false;
        // console.log('clicked');
    })

    genderInp[1].addEventListener('click', () => {
        inputs[3] = true;
        setSuccessOnly(gender);
        genderInp[0].checked = false;
        // console.log('clicked');
    })
}

// age
{
    age = document.getElementById('age');
    ageInp = document.querySelector('#age input');
    
    ageInp.addEventListener('input', () => {
        console.log(typeof ageInp.value);
        console.log(ageInp.value);
        if (ageInp.value - '0' > 0 && ageInp.value - '0' < 200){
            setSuccess(age, ageInp);
            inputs[4] = true;
        }
        else{
            setWrong(age, ageInp, 'invalid age');
            inputs[4] = false;
        }
    })
}

// birth 
{
    birth = document.getElementById('birth');
    birthInp = document.querySelector('#birth input');
    
    birthInp.addEventListener('input', (e) => {
        if (birthInp.value != ''){
            setSuccess(birth, birthInp);
            inputs[5] = true;
        }
        else {
            setWrong(birth, birthInp, 'please select date');
            inputs[5] = true;
        }
    })
}

// address 
{
    adr = document.getElementById('adr');
    adrInp = document.querySelector('#adr textarea');
    
    adrInp.addEventListener('input', () => {
        console.log(adrInp.value);
        if (adrInp.value != ''){
            setSuccess(adr, adrInp);
            inputs[6] = true;
        }
        else{
            setWrong(adr, adrInp, 'invalid address');
            inputs[6] = false;
        }
    })
}

// password 
{
    password = document.getElementById('password');
    passwordInp = document.querySelector('#password input');
    
    passwordInp.addEventListener('input', () => {
        if (isPasswordValid(passwordInp.value)){
            setSuccess(password, passwordInp);
            inputs[7] = true;
        }
        else{
            setWrong(password, passwordInp, 'invalid password');
            inputs[7] = false;
        }
    })
}

// confirm password 
{
    cpassword = document.getElementById('cpassword');
    cpasswordInp = document.querySelector('#cpassword input');
    
    cpasswordInp.addEventListener('input', () => {
        if (passwordInp.value == cpasswordInp.value)
        {
            setSuccess(cpassword, cpasswordInp);
            inputs[8] = true;
        }
        else
        {
            setWrong(cpassword, cpasswordInp, 'password didnt match');
            inputs[8] = false;
        }
    })
}

// agree
{
    agree = document.getElementById('agree');
    agreeInp = document.querySelector('#agree input');
    
    agreeInp.addEventListener('input', () => {
        if (agreeInp.checked){
            console.log('checked');
            setSuccessOnly(agree);
            inputs[9] = true;
        }
        else {
            console.log('un-checked');
            setWrongOnly(agree);
            inputs[9] = false;
        }
    })
}

// ------------------------------------------------------------------
                // functions 
// ------------------------------------------------------------------
// validate inputs 
function validateInputs()
{
    ret = true;
    console.log(inputs.length);
    for (let i=0; i<inputs.length; i++)
    {
        console.log(inputs[i]);
        if (inputs[i] == false)
        {
            ret = false;
            if (i == 6){
                iR = ioArr[i].getElementsByTagName('textarea');
            }
            else {
                iR = ioArr[i].getElementsByTagName('input');
            }
            if (i == 3 || i == 9){
                setWrongOnly(ioArr[i]);
            }
            else{
                setWrong(ioArr[i], iR[0], 'invalid input');
            }
            
            console.log('set ' + i + " wrong");
        } 
    }
    console.log("ret value : " + ret);
    if (ret == true){
        alert('form submitted');
        location.reload();
    }
    else {
        alert('invalid inputs');
    }
    // return ret;
}

function setWrongOnly(io)
{
    flags = io.getElementsByTagName('img');
    flags[0].style.display = 'none';
    flags[1].style.display = 'block';
    msgR = io.getElementsByTagName('span');
    msgR[0].innerHTML = '';
}

function setSuccessOnly(io)
{
    flags = io.getElementsByTagName('img');
    flags[1].style.display = 'none';
    flags[0].style.display = 'block';
    msgR = io.getElementsByTagName('span');
    msgR[0].innerHTML = '';
}

function setSuccess(io, input)
{
    input.style.border = '3px solid rgb(30, 223, 30)';
    flags = io.getElementsByTagName('img');

    flags[1].style.display = 'none';
    flags[0].style.display = 'block';

    msgR = io.getElementsByTagName('span');
    msgR[0].innerHTML = '';
}

function setWrong(io, input, msg)
{
    input.style.border = '3px solid red';
    flags = io.getElementsByTagName('img');

    flags[0].style.display = 'none';
    flags[1].style.display = 'block';

    msgR = io.getElementsByTagName('span');
    msgR[0].innerHTML = msg;
}

function isAlphanumeric(x)
{
    if (x == '') return false;
    for (let i=0; i<x.length; i++)
    {
        c = x.charAt(i);
        if (c >= 'a' && c <= 'z') continue;
        if (c >= 'A' && c <= 'Z') continue;
        if (c >= '0' && c <= '9') continue;
        return false;
    }
    return true;
}

function isEmailValid(x)
{
    const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;

    if (x.match(emailPattern)){
        return true;
    }
    else{
        return false;
    }
}

function isMobileValid(x)
{
    if (x == '') return false;
    if (x.length != 10) return false;
    for (let i=0; i<10; i++)
    {
        c = x.charAt(i);
        if (c >= '0' && c <= '9')
            continue;
        else
            return false;
    }
    return true;
}

function isPasswordValid(x)
{
    if (x == '') return false;
    if (x.length < 8) return false;
    console.log(x);

    const passPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

	if (x.match(passPattern)){
        return true;
    }
    else {
        return false;
    }

    // flags = [0,0,0,0];
    // for (let i=0; i<x.length; i++)
    // {
    //     c = x.charAt(i);
    //     console.log(c);
    //     if (x >= 'a' && x <= 'z'){
    //         flags[0] = 1;
    //         console.log('small');
    //     }
    //     else if (x >= 'A' && x <= 'Z') {
    //         flags[1] = 1;
    //         console.log('capital');
    //     }
    //     else if (x >= '0' && x <= '9') {
    //         flags[2] = 1;
    //         console.log('number');
    //     }
    //     else {
    //         flags[3] = 1;
    //         console.log('special character');
    //     }
    // }
    // for (let i=0; i<flags.length; i++)
    // {
    //     console.log(flags[i]);
    //     if (flags[i] == 0) return false;
    // }
    // console.log("reached here");
    // return true;
}
