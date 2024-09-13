function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if(num2 === 0){return 9999999999};
    return num1 / num2;
}

function operate(num1, operator, num2) {
    switch (operator) {
        case 0:
            return add(num1, num2);
        case 1:
            return subtract(num1, num2);
        case 2:
            return multiply(num1, num2);
        case 3:
            return divide(num1, num2);
        default:
    }
}

// Event listener function (event passed from button clicks)
function display(e) {
    textLength = displayVar.textContent.length;
    if(e.target.classList.contains('clear')){
        num1 = null;
        operator = null;
        num2 = null;
        displayVar.textContent = '';
    } else if(e.target.classList.contains('sign')){
        displayVar.textContent = Number(displayVar.textContent) * (-1);
    } else if((e.target.classList.contains('operation')) && (num1 == null)){
        num1 = Number(displayVar.textContent);
        if(e.target.classList.contains('plus')){
            operator = 0;
        } else if(e.target.classList.contains('minus')){
            operator = 1;
        } else if(e.target.classList.contains('times')){
            operator = 2;
        } else if(e.target.classList.contains('div')){
            operator = 3;
        }
        displayVar.textContent = e.target.innerHTML;
        clearLast = true;
    } else if(e.target.classList.contains('equals')){
        num2 = Number(displayVar.textContent);
        if(Math.round(operate(num1, operator, num2)*10000)/10000 < 99999999){
            displayVar.textContent = Math.round(operate(num1, operator, num2)*10000)/10000;
        } else {
            displayVar.textContent = "ERROR";
        }
        num1 = null;
        operator = null;
        num2 = null; 
    } else if(e.target.classList.contains('operation') && displayVar.textContent){
        num2 = Number(displayVar.textContent);
        if(Math.round(operate(num1, operator, num2)*10000)/10000 < 99999999){
            displayVar.textContent = Math.round(operate(num1, operator, num2)*10000)/10000;
        } else {
            displayVar.textContent = "ERROR";
        }
        num1 = Number(displayVar.textContent);
        if(e.target.classList.contains('plus')){
            operator = 0;
        } else if(e.target.classList.contains('minus')){
            operator = 1;
        } else if(e.target.classList.contains('times')){
            operator = 2;
        } else if(e.target.classList.contains('div')){
            operator = 3;
        }
        num2 = null;
        clearLast = true;
    } else if(e.target.classList.contains('num') && clearLast && textLength < 8){
        displayVar.textContent = e.target.innerHTML;
        clearLast = false;
    } else if(e.target.classList.contains('num') && !clearLast && textLength < 8){
        displayVar.textContent += e.target.innerHTML;
        clearLast = false;
    }
}

let num1 = null;
let operator;
let num2 = null;

let clearLast = false;

let displayVar = document.querySelector('.display')
let textLength = 0;
// Event Listener
let input = document.querySelector('.calculator');

input.addEventListener('click', display);
