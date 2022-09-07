const DEFAULT_PREVIOUS_NUMBER = null;
const DEFAULT_NUMBER = '0';
const DEFAULT_OPERATOR = '';

const prev_div = document.getElementById('prev');
const now_div = document.getElementById('now');
const clear = document.getElementById('clear');
const backspace = document.getElementById('backspace');
const number_buttons = document.querySelectorAll('.number');
const operator_buttons = document.querySelectorAll('.operator');
const dot= document.getElementById('dot');
const equal = document.getElementById('equal');

let previous_number = DEFAULT_PREVIOUS_NUMBER;
let now_number = DEFAULT_NUMBER;
let now_operator = DEFAULT_OPERATOR;
let dotIn = false;

clear.addEventListener('click', e => doClear(e));

backspace.addEventListener('click', e => doBackspace(e));

number_buttons.forEach(button => {
    button.addEventListener('click', e => {
        now_number === '0' ? now_number = e.target.textContent : now_number += e.target.textContent;
        e.target.classList.add('clicked');
        setTimeout(() => e.target.classList.remove('clicked'), 100);
        displayResult();
    });
});

operator_buttons.forEach(button => {
    button.addEventListener('click', e => {
        if (now_operator === '/' && (now_number === '0' || now_number === '0.')) {
            now_number = '0';
            mode = 'zero';
        }
        else if (now_operator) {
            previous_number = operate(previous_number, now_number, now_operator).toString();
        }
        else {
            previous_number = now_number;
        }
        now_operator = e.target.textContent;
        now_number = '0';
        dotIn = false;
        e.target.classList.add('clicked');
        setTimeout(() => e.target.classList.remove('clicked'), 100);
        displayResult();
    });
});

dot.addEventListener('click', e => {
    if (dotIn === false) {
        dotIn = true;
        now_number += '.';
    }
    e.target.classList.add('clicked');
    setTimeout(() => e.target.classList.remove('clicked'), 100);
    displayResult();
});

equal.addEventListener('click', e => {
    let mode = now_number;
    if (now_operator === '/' && (now_number === '0' || now_number === '0.')) {
        mode = 'zero';
    }
    else if (now_operator !== '') now_number = operate(previous_number, now_number, now_operator);
    if (Number(now_number) !== Math.round(Number(now_number))) {
        dotIn = true;
    }
    else {
        dotIn = false;
    }
    e.target.classList.add('clicked');
    setTimeout(() => e.target.classList.remove('clicked'), 100);
    if (now_operator !== ''){
        displayResult(mode);
        now_operator = '';
        previous_number = null;
    }
});

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
    a = Number(a);
    b = Number(b);
    if (operator === '+') return add(a, b);
    else if (operator === '-') return subtract(a, b);
    else if (operator === '*') return multiply(a, b);
    else if (operator === '/') return divide(a, b);
}

function doClear(e) {
    prev_div.textContent = '';
    previous_number = null;
    now_number = '0';
    now_operator = '';
    e.target.classList.add('clicked');
    setTimeout(() => e.target.classList.remove('clicked'), 100);
    displayResult();
}

function doBackspace(e) {
    if (now_number !== '0') now_number = now_number.slice(0, now_number.length-1);
    e.target.classList.add('clicked');
    setTimeout(() => e.target.classList.remove('clicked'), 100);
    displayResult();
}

function displayResult(mode=null) {
        if(mode === null) {
            if (previous_number !== null) prev_div.textContent = previous_number + now_operator;
            now_div.textContent = now_number;
            }
            
        else if(mode === 'zero') {
            prev_div.textContent = '';
            now_div.textContent = 'Zero division error';
            setTimeout(() => now_div.textContent = now_number, 1500);
        }
        else {
            prev_div.textContent = previous_number + now_operator + mode;
            now_div.textContent = now_number;
        }
}

displayResult();