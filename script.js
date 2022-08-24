//global variables and arrays
let total = 0;
let typedValue = "0";
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
        operator = event.key;
        console.log(total + operator + typedValue + " =")
        total = operate(total,Number(typedValue),operator);
        typedValue = "";
        console.log(total);
        
    }
    else {
        typedValue += event.key;
    }
}
//Event listeners
window.addEventListener("keypress", (event) => {checkForOperator(event);});