let css = document.querySelector(".gcolor");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
//Background color
let body = document.getElementById("gradient");
//buttons
let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");


function setGradient() {
    body.style.background =
    "linear-gradient( to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";
    css.textContent = body.style.background + ";";
}


function setRandomColor1() {
   color1.value = '#' + Math.floor(Math.random()*16777215).toString(16);
   setGradient();
}

function setRandomColor2() {
    color2.value = '#' +  Math.floor(Math.random()*16777215).toString(16);
    setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button1.addEventListener("click", setRandomColor1);
button2.addEventListener("click", setRandomColor2);

