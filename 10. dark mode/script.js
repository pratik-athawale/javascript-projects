toggleR = document.getElementById('toggleId');
body = document.querySelector('body');

toggleR.addEventListener('click', () => {
    console.log('clicked');
    toggleR.classList.toggle('fa-moon');
    if (toggleR.classList.toggle('fa-sun')){
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
    else{
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
});