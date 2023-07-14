function appendToDisplay(value) {
  const display = document.getElementById('display');
  display.value += value;
}

function clearDisplay() {
  const display = document.getElementById('display');
  display.value = '';
}

function evaluateExpression() {
  const display = document.getElementById('display');
  const expression = display.value;
  let result;

  try {
    result = eval(expression);
  } catch (error) {
    result = 'Error';
  }

  display.value = result;
}
