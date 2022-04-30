"use strict";

calculator();

function calculator() {
  let displayValue = "0";

  updateDisplay(displayValue);
}

// DISPLAY FUNCTIONS
function updateDisplay(value) {
  let display = document.getElementById("display");

  display.textContent = value;
}

// OPERATOR FUNCTIONS

function add(firstNum, secondNum) {
  return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
  return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
  return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
  if (secondNum === 0) {
    return "Cannot divide by zero";
  } else {
    return firstNum / secondNum;
  }
}

function selectOperation(operator, firstNum, secondNum) {
  switch (operator) {
    case "+":
      return add(firstNum, secondNum);

    case "-":
      return subtract(firstNum, secondNum);

    case "*":
      return multiply(firstNum, secondNum);

    case "/":
      return divide(firstNum, secondNum);
    default:
      return "Invalid Operator";
  }
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  selectOperation,
  updateDisplay,
};
