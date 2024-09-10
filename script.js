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
    return num1 / num2;
}

function operate(num1, operator, num2) {
    switch (operator) {
        case 0:
            return add(num1, num2);
            break;
        case 1:
            return subtract(num1, num2);
            break;
        case 2:
            return multiply(num1, num2);
            break;
        case 3:
            return divide(num1, num2);
            break;
        default:
            break;
    }
}

// Event listener function (event passed from button clicks)
function display(e) {
    if(e.target.classList.contains('clear')){
        num1 = null;
        operator = null;
        num2 = null;
        displayVar.textContent = '';
        console.log('cleared');
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
        console.log('num1: ' + num1 + ' operator: ' + operator);
        clearLast = true;
    } else if(e.target.classList.contains('operation')){
        num2 = Number(displayVar.textContent);
        console.log('num1: ' + num1 + ' operator: ' + operator + ' num2: ' + num2);
        displayVar.textContent = operate(num1, operator, num2);
        num1 = null;
        operator = null;
        num2 = null;
    } else if(e.target.classList.contains('num') && clearLast){
        displayVar.textContent = e.target.innerHTML;
        console.log(displayVar.textContent);
        clearLast = false;
    } else if(e.target.classList.contains('num') && !clearLast){
        displayVar.textContent += e.target.innerHTML;
        console.log(displayVar.textContent);
        clearLast = false;
    }
}

let num1 = null;
let operator;
let num2 = null;

let clearLast = false;

let displayVar = document.querySelector('.display')

// Event Listener
let input = document.querySelector('.calculator');

input.addEventListener('click', display);
