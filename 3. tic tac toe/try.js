console.log("conn");

let e = document.getElementById("btn1");

e.addEventListener('mouseover', () => {
    e.style.backgroundColor = "blue";
    console.log("hovered");
})

e.addEventListener('mouseout', () => {
    e.style.backgroundColor = "white";
    console.log("hovered");
})

e.addEventListener('click', () => {
    e.style.backgroundColor = "red";
    console.log("hovered");
})