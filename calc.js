const display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

function calculatePercent() {
  try {
    display.value = eval(display.value) / 100;
  } catch (error) {
    display.value = 'Error';
  }
}

function calculateSquareRoot() {
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch (error) {
    display.value = 'Error';
  }
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateSquare() {
  try {
    display.value = Math.pow(eval(display.value), 2);
  } catch (error) {
    display.value = 'Error';
  }
}

function calculateCube() {
  try {
    display.value = Math.pow(eval(display.value), 3);
  } catch (error) {
    display.value = 'Error';
  }
}

function calculateFactorial() {
  try {
    const num = eval(display.value);
    if (num < 0 || !Number.isInteger(num)) {
      display.value = 'Error';
      return;
    }
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}

function calculateExponent() {
  const base = eval(prompt('Enter the base:'));
  const exponent = eval(prompt('Enter the exponent:'));
  try {
    display.value = Math.pow(base, exponent);
  } catch (error) {
    display.value = 'Error';
  }
}

function calculateLog() {
  try {
    display.value = Math.log10(eval(display.value));
  } catch (error) {
    display.value = 'Error';
  }
}

function calculateLn() {
  try {
    display.value = Math.log(eval(display.value));
  } catch (error) {
    display.value = 'Error';
  }
}
