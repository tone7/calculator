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

const newInput = document.getElementById('newInput');
const lastInput = document.getElementById('lastInput');

let currentOperator = ['÷', '×', '−', '+'];

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

addButton.addEventListener('click', operatorClicked);
substractButton.addEventListener('click', operatorClicked);
multiplyButton.addEventListener('click', operatorClicked);
divideButton.addEventListener('click', operatorClicked);

window.addEventListener('keydown', handleKeyboardInput);

function enterNumber(e){
    if(newInput.textContent == 'MATH ERROR'){
        newInput.textContent = '';
    }
    newInput.textContent += e.target.textContent;
    //pressButton(e);
}

function operatorClicked(e){
    let operand1 = 0;
    let operand2 = 0;
    let lastInputString = lastInput.textContent.split(' ')[0];
    let newInputString = newInput.textContent;
    let operator = lastInput.textContent.split(' ')[1];

    switch(e.target.innerText){
        case '÷': 
            if(newInputString == '' || newInputString == 'MATH ERROR'){

            }else if(lastInput.textContent == ''){
                lastInput.textContent = `${newInput.textContent} ${currentOperator[0]}`
                newInput.textContent = '';
            }else{
                operand1 = getNumber(lastInputString);

                if(newInput.textContent == 'MATH ERROR') break;

                operand2 = getNumber(newInputString);

                let result = operate(operator, operand1, operand2);
                lastInput.textContent = `${result} ${currentOperator[0]}`;
                newInput.textContent = '';
            }
            break;
        case '×': 
            if(newInputString == '' || newInputString == 'MATH ERROR'){
                
            }else if(lastInput.textContent == ''){
                lastInput.textContent = `${newInput.textContent} ${currentOperator[1]}`
                newInput.textContent = '';
            }else{
                operand1 = getNumber(lastInputString);

                if(newInput.textContent == 'MATH ERROR') break;

                operand2 = getNumber(newInputString);

                let result = operate(operator, operand1, operand2);
                lastInput.textContent = `${result} ${currentOperator[1]}`;
                newInput.textContent = '';
            }
            break;
        case '−':
            if(newInputString == '' || newInputString == 'MATH ERROR'){
                
            }else if(lastInput.textContent == ''){
                lastInput.textContent = `${newInput.textContent} ${currentOperator[2]}`
                newInput.textContent = '';
            }else{
                operand1 = getNumber(lastInputString);

                if(newInput.textContent == 'MATH ERROR') break;

                operand2 = getNumber(newInputString);

                let result = operate(operator, operand1, operand2);
                lastInput.textContent = `${result} ${currentOperator[2]}`;
                newInput.textContent = '';
            }
            break;
        case '+': 
            if(newInputString == '' || newInputString == 'MATH ERROR'){
                
            }else if(lastInput.textContent == ''){
                lastInput.textContent = `${newInput.textContent} ${currentOperator[3]}`
                newInput.textContent = '';
            }else{
                operand1 = getNumber(lastInputString);

                if(newInput.textContent == 'MATH ERROR') break;

                operand2 = getNumber(newInputString);

                let result = operate(operator, operand1, operand2);
                lastInput.textContent = `${result} ${currentOperator[3]}`;
                newInput.textContent = '';
            }
            break;
        default:break;
    }
}

periodButton.addEventListener('click', periodButtonClicked);

function periodButtonClicked(){
    if(newInput.textContent == 'MATH ERROR'){
        newInput.textContent = '';
    }
    newInput.textContent += '.';
}

function signButtonClicked(){
    if(newInput.textContent == 'MATH ERROR'){
        newInput.textContent = '';
    }
    let numberString = newInput.textContent;
    let number = getNumber(numberString);

    if(number > 0){
        newInput.textContent = `-${newInput.textContent}`;
    }else{
        let numberArray = numberString.split('');
        numberArray.splice(0, 1);
        numberString = numberArray.join('');
        newInput.textContent = numberString;
    }
}

signButton.addEventListener('click', signButtonClicked);

function equalButtonClicked(){
    if(!(newInput.textContent == 'MATH ERROR') && !(newInput.textContent == '')){
        let operand1 = getNumber(lastInput.textContent.split(' ')[0]);
        if(!(newInput.textContent == 'MATH ERROR')){
            let operand2 = getNumber(newInput.textContent);
            let operator = getOperator(lastInput.textContent);
            let result = operate(operator, operand1, operand2);
            lastInput.textContent = '';
            newInput.textContent = result;
        }
    }
}

equalButton.addEventListener('click', equalButtonClicked);

function getOperator(string){
    let stringSplit = string.split(' ');
    return stringSplit[1];
}

function isFloating(string){
    let counter = 0;
    for(let i = 0; i < string.length; i++){
        if(string.charAt(i) == '.'){
            counter++;
        }
    }
    if(counter == 1){
        return true;
    }else if(counter == 0){
        return false;
    }else{
        lastInput.textContent = '';
        newInput.textContent = 'MATH ERROR';
        return false;
    }
}

function getNumber(string){
    let checkFloating = isFloating(string);
    if(checkFloating){
        return parseFloat(string);
    }

    return parseInt(string);
}

function clearButtonClicked(){
    if(newInput.textContent == '' || newInput.textContent == 'MATH ERROR'){
        lastInput.textContent = '';
    }else{
        newInput.textContent = '';
    }
}

clearButton.addEventListener('click', clearButtonClicked);

function deleteButtonClicked(){
    if(!(newInput.textContent == '') && !(newInput.textContent == 'MATH ERROR')){
        newInput.textContent = newInput.textContent.slice(0, -1);
    }
}

deleteButton.addEventListener('click', deleteButtonClicked);

function pressButton(e){
    e.target.style.boxShadow = 'inset 5px 5px 2px';
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
        case '−': result = substract(number1, number2);
         break;
        case '×': result = multiply(number1, number2);
         break;
        case '÷': result = divide(number1, number2);
         break;
        default:break;
    }

    return result;
}

function handleKeyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) appendNumber(e.key)
    if (e.key === '.') appendPoint()
    if (e.key === '=' || e.key === 'Enter') evaluate()
    if (e.key === 'Backspace') deleteNumber()
    if (e.key === 'Escape') clear()
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/')
      setOperation(convertOperator(e.key))
  }
  
  function convertOperator(keyboardOperator) {
    if (keyboardOperator === '/') return '÷'
    if (keyboardOperator === '*') return '×'
    if (keyboardOperator === '-') return '−'
    if (keyboardOperator === '+') return '+'
  }