const header = document.getElementById('header');
const container = document.getElementById('container');
const calculator = document.getElementById('calculator');
const inner = document.getElementById('inner');
const screen = document.getElementById('screen');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const divideButton = document.getElementById('divide');
const multiplyButton = document.getElementById('multiply');
const substractButton = document.getElementById('substract');
const addButton = document.getElementById('add');
const signButton = document.getElementById('sign');
const periodButton = document.getElementById('period');
const equalButton = document.getElementById('equal');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');

const text = document.getElementById('text');

let i = 0;

// calculator.addEventListener('mouseover', greet(i));

// function greet(i){
//     const string = 'H E L L O !';
//     if(i == string.length - 1) return true;
//     text.textContent += string.charAt(i);
//     console.log(text.textContent);
//     i++;
//     setTimeout(greet(i), 2000);
// }

one.addEventListener('click', enterNumber);
two.addEventListener('click', enterNumber);
three.addEventListener('click', enterNumber);
four.addEventListener('click', enterNumber);
five.addEventListener('click', enterNumber);
six.addEventListener('click', enterNumber);
seven.addEventListener('click', enterNumber);
eight.addEventListener('click', enterNumber);
nine.addEventListener('click', enterNumber);
zero.addEventListener('click', enterNumber);

function enterNumber(e){
    console.log(text.textContent);
    if(text.textContent === 'H E L L O !'){
        text.textContent = '';
    }
    text.textContent += e.target.textContent;
}



function add(number1, number2){
    return number1 + number2;
}

function substract(number1, number2){
    return number1 - number2;
}

function multiply(number1, number2){
    return number1 * number2;
}

function divide(number1, number2){
    return number1 / number2;
}

function operate(operator, number1, number2){
    let result = 0;
    switch(operator){
        case '+': result = add(number1, number2);
         break;
        case '-': result = substract(number1, number2);
         break;
        case '*': result = multiply(number1, number2);
         break;
        case '/': result = divide(number1, number2);
         break;
        default:break;
    }

    console.log(result);
}

operate('+', 4, 2);
operate('-', 4, 2);
operate('*', 4, 2);
operate('/', 4, 2);