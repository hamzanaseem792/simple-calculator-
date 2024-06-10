var userInput = document.querySelector('#user_input');
var keyB = document.querySelectorAll('.btn');  // Select all buttons with the class .btn
var f_btn = document.querySelectorAll('.f_btn');  // Select all buttons with the class .f_btn

// Event listener for keyB buttons (number buttons)
Array.from(keyB).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        var value = e.target.innerHTML;
        userInput.value += value;  // Append the value to the input field
    });
});

const eraseFunction = function() {
    userInput.value = "";
}

const DoFunction = function() {
    try {
        userInput.value = eval(userInput.value);  // Evaluate the expression in the input field
    } catch (error) {
        userInput.value = "Error";  // Display error if the evaluation fails
    }
}

// Event listener for function buttons (+, -, *, /, =, C)
Array.from(f_btn).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        var fun = e.target.innerHTML;
        if (fun == '=') {
            DoFunction();
        } else if (fun == 'C') {
            eraseFunction();
        } else {
            userInput.value += fun;  // Append the operator to the input field
        }
    });
});
