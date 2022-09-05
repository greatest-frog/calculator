const DEFAULT_PREVIOUS_NUMBER = null;
const DEFAULT_NUMBER = 0;
const DEFAULT_OPERATOR = '';

const result = document.getElementById('result');
const clear = document.getElementById('clear');
const backspace = document.getElementById('backspace');
const number_buttons = document.querySelectorAll('.number');
const operator_buttons = document.querySelectorAll('.operator');

let previous_number = DEFAULT_PREVIOUS_NUMBER;
let now_number = DEFAULT_NUMBER;
let now_operator = DEFAULT_OPERATOR;

clear.addEventListener('click', e => {
    previous_number = null;
    now_number = 0;
    now_operator = '';
    e.target.classList.add('clicked');
    setTimeout(() => e.target.classList.remove('clicked'), 100)
    displayResult();
})

backspace.addEventListener('click', (e) => {
    now_number = (now_number - now_number % 10) / 10;
    e.target.classList.add('clicked');
    setTimeout(() => e.target.classList.remove('clicked'), 100)
    displayResult();
})

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

function displayResult() {
    result.textContent = now_operator + now_number;
}

displayResult();