const result = document.getElementById('result');
const active_buttons = document.querySelectorAll('.active_button');
const buttons = document.querySelectorAll('.button');


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator) {
    if (operator === '+') return add(a, b);
    else if (operator === '-') return subtract(a, b);
    else if (operator === '*') return multiply(a, b);
    else if (operator === '/') return divide(a, b);
}
