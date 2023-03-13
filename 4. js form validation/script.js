myform = document.forms['myform'];
unameR = myform['uname'];
// unameR = document.getElementById('unameId');
emailR = document.getElementById('emailId');
phoneR = document.getElementById('phoneId');
pwdR = document.getElementById('pwdId');
cpwdR = document.getElementById('cpwdId');
checkboxR = document.getElementById('checkboxId');



validateInputs = () => {
    console.log('function called');
    let returnV = true;
    console.log('\t at start returnV ' + returnV);

    unameV = unameR.value.trim();
    if (unameV == ''){
        returnV = false;
        console.log('\t invalid username');
        setError(unameR, "Username can't be Empty");
    } else{
        setSuccess(unameR);
    }

    emailV = emailR.value.trim();
    if (emailV == ''){
        returnV = false;
        console.log('\t invalid email');
        setError(emailR, "Email can't be Empty");
    } else{
        setSuccess(emailR);
    }

    phoneV = phoneR.value.trim();
    if (phoneV == '' || phoneV.length != 10 || isNaN(phoneV)){
        returnV = false;
        console.log('\t invalid phone');
        setError(phoneR, "invalid phone number");
    } else{
        setSuccess(phoneR);
    }

    pwdV = pwdR.value.trim();
    if (pwdV.length < 8){
        returnV = false;
        console.log('\t invalid password');
        setError(pwdR, "password should be minimum 8 characters long");
    } else{
        setSuccess(pwdR);
    }

    cpwdV = cpwdR.value.trim();
    if (cpwdV != pwdV || pwdV.length < 8){
        returnV = false;
        console.log('\t invalid c password');
        setError(cpwdR, "password didn't match");
    } else{
        setSuccess(cpwdR);
    }

    checkboxV = checkboxR.checked;
    if (checkboxV == false){
        returnV = false;
        console.log('\t invalid checkbox');
        setError(checkboxR, "You must agree this to continue");
    } else{
        setSuccess(checkboxR);
    }

    console.log('returned '+returnV);
    return returnV;
}

function setError(e, msg)
{
    e.style.borderColor = "red";
    pe = e.parentElement;

    err = pe.querySelector('.error');
    err.innerText = msg;
}

function setSuccess(e)
{
    e.style.borderColor = "green";
    pe = e.parentElement;

    err = pe.querySelector('.error');
    err.innerText = '';
}