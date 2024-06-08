let displayValue = '0';

function updateDisplay() {
  document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
  displayValue = '0';
  updateDisplay();
}

function appendInput(input) {
  if (displayValue === '0' || displayValue === 'Error') {
    displayValue = input;
  } else {
    displayValue += input;
  }
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue);
    if (isNaN(displayValue) || !isFinite(displayValue)) {
      throw new Error('Invalid expression');
    }
    displayValue = displayValue.toString();
  } catch (error) {
    displayValue = 'Error';
  }
  updateDisplay();
}
