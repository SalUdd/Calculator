// first number
// operator selected 
// second number
// calculate/=


const display = document.getElementById("displayText");

function clr() { 
    document.getElementById("displayText").innerHTML = "";
} 


function appendToDisplay(input) {
    display.innerHTML += input;
}