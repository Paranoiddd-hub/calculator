const a = 1;
const operator = '+';
const b = 2;

function operate(a, operator, b) {
    switch (operator) {
        case '+':
            return a + b;
            break;
        case '-':
            return a - b;
            break;
        case '*':
            return a * b;
            break;
        case '/':
            return a / b;
            break;
    }
}

console.log(operate(a, operator, b));