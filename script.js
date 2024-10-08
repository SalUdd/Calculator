// first number
// operator selected 
// second number
// calculate/=


const display = document.getElementById("displayText");
var dataArray = [];
let dataOperand; 


function clr() { 
    document.getElementById("displayText").innerHTML = "";
    dataArray = [];
    dataOperand = null;
    console.log("Cleared display and data");
} 


function appendToDisplay(input) {
    display.innerHTML += input;
}

function calculateData() {
    let data = display.innerHTML;
    console.log("Data before splitting:", data);
    
    if (data.indexOf("+") !== -1) {
        dataOperand = "+";
        dataArray = data.split(dataOperand);
    } else if (data.indexOf("-") !== -1) {
        dataOperand = "-";
        dataArray = data.split(dataOperand);
    } else if (data.indexOf("*") !== -1) {
        dataOperand = "*";
        dataArray = data.split(dataOperand);
    } else if (data.indexOf("/") !== -1) {
        dataOperand = "/";
        dataArray = data.split(dataOperand);
    } else {
        alert("Please select an Operand");
        return;
    }
    
    dataArray.push(dataOperand);
    console.log("Data array inside calculateData:", dataArray);
    console.log("Operand inside calculateData:", dataOperand);
    
    let firstNum = parseFloat(dataArray[0]);
    let secondNum = parseFloat(dataArray[1]);
    let result;
    console.log(firstNum);
    console.log(secondNum);
    switch (dataOperand) {
        case "+":
            result = firstNum + secondNum;
            break;
        case "-":
            result = firstNum - secondNum;
            break;
        case "*":
            result = firstNum * secondNum;
            break;
        case "/":
            result = secondNum !== 0 ? firstNum / secondNum : "Error";
            break;
        default:
            result = "Invalid operation";
    }
    
    display.innerHTML = result;
    console.log("Calculation result:", result);
   
}

