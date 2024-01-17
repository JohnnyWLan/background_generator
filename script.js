var _= require('lodash');
 let array = [1,2,3,4];
 console.log('answer:',_.without(array, 3));   
let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let button = document.querySelector("button");''

function setGradient() {
     body.style.background =
     "linear-gradient(to right, "
    +color1.value
    + ", " 
    + color2.value
     + ")";
     css.textContent = body.style.background + ";";
}
function setRandomGradient() {
  body.style.background =
    "linear-gradient(to right, " 
    + generateRandomColors() 
    +", "
     +generateRandomColors();
     + ")";
}

function generateRandomColors() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", setRandomGradient);