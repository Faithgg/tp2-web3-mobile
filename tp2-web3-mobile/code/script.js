document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.calculator button');
    const display = document.querySelector('.calculator .display');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            const value = button.textContent;

            if (value === 'C') {
                display.textContent = '';
            } else if (value === '=') {
                try {
                    display.textContent = eval(display.textContent);
                } catch {
                    display.textContent = 'Error';
                }
            } else {
                display.textContent += value;
            }
        });
    });
});

function appendNumber(param) {
    const display = document.querySelector('input#result');
    display.value += param;
}

function appendOperator(operator) {
    const display = document.querySelector('input#result');
    display.value += operator;
}

function clearResult() {
    const display = document.querySelector('input#result');
    display.value = '';
}

function calculateResult() {
    const display = document.querySelector('input#result');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}