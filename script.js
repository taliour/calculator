//DOM variables
const screen = document.querySelector(".screen");
//global variables and arrays
let total = 0;
let lastValue = null;
let currentValue = "";
let typedValue = "";
let operator = "";
//functions

function add(total,addedValue){
    return total + addedValue;
}
function subtract(total, subtractedValue){
    return total - subtractedValue;
}
function multiply(total, multipliedValue){
    return total * multipliedValue;
}
function divide(total, denominatorValue){
    return total / denominatorValue;
}
function operate(value1,value2,operator){
    if (operator == "+"){
        return add(value1,value2);
    }
    if (operator == "-"){
        return subtract(value1,value2);
    }
    if (operator == "*"){
        return multiply(value1,value2);
    }
    if (operator == "/"){
        return divide(value1,value2);
    }
}
function checkForOperator(event) {
    if(event.key == "+" || event.key == "-" || event.key == "*" || event.key == "/" ){
        if (lastValue != null){
            currentValue = operate(lastValue,Number(currentValue),operator);
        }
        operator = event.key;
        lastValue = Number(currentValue);
        currentValue = ""
        screen.textContent = lastValue;
        
    }
    else if(event.key == "c"){
        lastValue = null;
        currentValue = "";
        operator = "";
        screen.textContent = "";
    }
    else {
        currentValue += event.key;
        screen.textContent = currentValue;
    }
}
//Event listeners
window.addEventListener("keypress", (event) => {checkForOperator(event);});