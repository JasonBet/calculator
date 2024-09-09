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
        case '+':
            add(num1, num2);
            break;
        case '-':
            subtract(num1, num2);
            break;
        case '*':
            multiply(num1, num2);
            break;
        case '/':
            divide(num1, num2);
            break;
        default:
            break;
    }
}

function display() {

}

let num1;
let operator;
let num2;

let displayVar = document.querySelector('.display')

// Event Listener
let input = document.querySelector('.calculator');

input.addEventListener('click', (e) => {
    if(e.target.nodeName == 'BUTTON'){
        console.log(e.target.innerHTML);
    }
    if(e.target.classList.contains('num')){
        console.log("Is num")
        displayVar.textContent += e.target.innerHTML;
    }
})