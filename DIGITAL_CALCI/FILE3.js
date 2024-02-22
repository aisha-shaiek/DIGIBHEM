let display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value.replace(/Math\.sin/g, 'Math.sin').replace(/Math\.cos/g, 'Math.cos').replace(/Math\.tan/g, 'Math.tan');
        expression = expression.replace(/Math\.log10/g, 'Math.log10').replace(/Math\.sqrt/g, 'Math.sqrt').replace(/Math\.exp/g, 'Math.exp');
        expression = expression.replace(/Math\.PI/g, 'Math.PI');
        expression = expression.replace(/\^/g, '**'); // Replace ^ with ** for power operation
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}

function factorial() {
    let num = parseFloat(display.value);
    if (!isNaN(num) && num >= 0 && Number.isInteger(num)) {
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        display.value = result;
    } else {
        display.value = 'Error';
    }
}

// Function to handle power operation
function power() {
    // Check if there is a number before and after the caret (^) symbol
    if (/(\d+\.\d+|\d+|\.\d+|\d+)\^(\d+\.\d+|\d+|\.\d+|\d+)/.test(display.value)) {
        display.value += '^';
    } else {
        display.value = 'Error';
    }
}

// Function to handle exponential function
function exponential() {
    display.value += 'Math.exp(';
}
