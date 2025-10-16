let currentInput = '';
let operation = null;
let previousInput = '';

function appendNumber(number) {
  currentInput += number.toString();
  updateDisplay(currentInput);
}

function setOperation(op) {
  if (currentInput === '') return;
  if (previousInput !== '') {
    calculateResult();
  }
  operation = op;
  previousInput = currentInput;
  currentInput = '';
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operation = null;
  updateDisplay('0');
}

function calculateResult() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      if (current === 0) {
        result = 'Erro';
      } else {
        result = prev / current;
      }
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operation = null;
  previousInput = '';
  updateDisplay(currentInput);
}

function updateDisplay(value) {
  const display = document.getElementById('display');
  display.value = value;
}
