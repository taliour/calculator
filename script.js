//DOM variables
const screen = document.querySelector(".screen");
const number = document.querySelectorAll(".number");
const operatorUI = document.querySelectorAll(".operator");
const clearUI = document.querySelector(".clear");
const equalUI = document.querySelector(".equal");
//global variables and arrays
let lastValue = null;
let currentValue = "";
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
    //operate if = sign pressed on keyboard 
    if (event.key == "="){
        if (lastValue != null){
            currentValue = operate(lastValue,Number(currentValue),operator);
        }
        lastValue = Number(currentValue);
        currentValue = "";
        screen.textContent = lastValue;
    }
    //operate if operator pressed on keyboard
    else if(event.key == "+" || event.key == "-" || event.key == "*" || event.key == "/"){
        if (lastValue != null && currentValue!= ""){
            currentValue = operate(lastValue,Number(currentValue),operator);
        }
        operator = event.key;
        if (currentValue !=""){
            lastValue = Number(currentValue);
            currentValue = ""
            screen.textContent = lastValue;
            console.log("fuck off");
        }
    }
    //clear if c pressed on keyboard
    else if(event.key == "c"){
        lastValue = null;
        currentValue = "";
        operator = "";
        screen.textContent = "";
    }
    //Add decimal when dot . pressed and don't allow more than one
    else if(event.key == "." && currentValue.split(".").length < 2){
        currentValue += event.key;
        screen.textContent = currentValue;
    }
    //append number if number pressed on keyboard
    else if (Number(event.key)%1 == 0) {
        currentValue += event.key;
        screen.textContent = currentValue;
    }
    //remove last character from currentValue string and update the text content of screen
    if(event.key == "Backspace"){
        if (currentValue !=""){
            currentValue = currentValue.slice(0,-1);
            screen.textContent = currentValue;
        }
    }
}
//Appends number to current number when clicked in the UI
function appendNumbersUI(number){
    currentValue += number.textContent;
    screen.textContent = currentValue;
}
function checkForOperatorsUI(operatorUI){

    if (lastValue != null && currentValue!= ""){
        currentValue = operate(lastValue,Number(currentValue),operator);
    }
    operator = operatorUI.textContent;
    if (currentValue !=""){
        lastValue = Number(currentValue);
        currentValue = ""
        screen.textContent = lastValue;
    }
}
function clearCalculatorUI(){
    lastValue = null;
    currentValue = "";
    operator = "";
    screen.textContent = "";
}
function pressedEqualUI(){
    if (lastValue != null){
        currentValue = operate(lastValue,Number(currentValue),operator);
    }
    lastValue = Number(currentValue);
    currentValue = "";
    screen.textContent = lastValue;
}
//Event listeners

//Check for keyboard button pressed
window.addEventListener("keydown", (event) => {checkForKeyboard(event);});

//Check for number pressed on UI
number.forEach(function(number){
    number.addEventListener("click", () =>{appendNumbersUI(number)})});

//Check for operator pressed on UI
operatorUI.forEach(function(operatorUI){
    operatorUI.addEventListener("click",() =>{checkForOperatorsUI(operatorUI)})
});

//Check when C button pressed on UI
clearUI.addEventListener("click",() => {clearCalculatorUI()});

//Check for = sign pressed on UI
equalUI.addEventListener("click", ()=> {pressedEqualUI()});
