//DOM variables
const screen = document.querySelector(".screen");
const number = document.querySelectorAll(".number");
const operatorUI = document.querySelectorAll(".operator");
const clearUI = document.querySelector(".clear");
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
//Checks for operators and assigns values when keyboard buttons pressed
function checkForKeyboard(event) {
    if (event.key == "="){
        if (lastValue != null){
            currentValue = operate(lastValue,Number(currentValue),operator);
        }
        lastValue = Number(currentValue);
        currentValue = "";
        screen.textContent = lastValue;
    }
    else if(event.key == "+" || event.key == "-" || event.key == "*" || event.key == "/" ){
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
    else if (Number(event.key)%1 == 0) {
        currentValue += event.key;
        screen.textContent = currentValue;
    }
}
//Appends number to current number when clicked in the UI
function appendNumbersUI(number){
    currentValue += number.textContent;
    screen.textContent = currentValue;
}
function checkForOperatorsUI(operatorUI){

    if (lastValue != null){
        currentValue = operate(lastValue,Number(currentValue),operator);
    }
    operator = operatorUI.textContent;
    lastValue = Number(currentValue);
    currentValue = ""
    screen.textContent = lastValue;
}
function clearCalculatorUI(){
    lastValue = null;
    currentValue = "";
    operator = "";
    screen.textContent = "";
}
//Event listeners

//Check for keyboard button pressed
window.addEventListener("keypress", (event) => {checkForKeyboard(event);});

//Check for number pressed on UI
number.forEach(function(number){
    number.addEventListener("click", () =>{appendNumbersUI(number)})});

//Check for operator pressed on UI
operatorUI.forEach(function(operatorUI){
    operatorUI.addEventListener("click",() =>{checkForOperatorsUI(operatorUI)})
});

//Clear the calculator when C button pressed on UI
clearUI.addEventListener("click",() => {clearCalculatorUI()});
