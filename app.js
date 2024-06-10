var userInput = document.querySelector('#user_input');
var keyB = document.querySelectorAll('.btn');  
var f_btn = document.querySelectorAll('.f_btn');  

let currentOperator = '';
let currentValue = '';
let previousValue = '';

Array.from(keyB).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        var value = e.target.innerHTML;
        userInput.value += value;  
        currentValue += value;
    });
});

const operate = function(operator) {
    if (previousValue && currentValue && currentOperator) {
        DoFunction();
    }
    previousValue = currentValue;
    currentOperator = operator;
    currentValue = '';
    userInput.value = '';
}

const DoFunction = function() {
    if (!previousValue || !currentValue || !currentOperator) return;

    let result;
    let prev = parseFloat(previousValue);
    let curr = parseFloat(currentValue);

    switch (currentOperator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '/':
            result = prev / curr;
            break;
        case '*':
            result = prev * curr;
            break;
        default:
            return;
    }

    userInput.value = result;
    previousValue = result.toString();
    currentValue = '';
    currentOperator = '';
}
const eraseFunction = function() {
    userInput.value = "";
    currentValue = '';
    previousValue = '';
    currentOperator = '';
}




Array.from(f_btn).forEach((f_btn)=>{
    f_btn.addEventListener('click',(e) =>{
        var fun = e.target.innerHTML;
        if (fun == '+') {
            operate('+');
        } else if (fun == '-') {
            operate('-');
        } else if (fun == '/') {
            operate('/');
        } else if (fun == '*') {
            operate('*');
        } else if (fun == '=') {
            DoFunction();
        } else if (fun == 'C') {
            eraseFunction();
        }
    })
})
