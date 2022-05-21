"use strict";

calculator();

function calculator() {
  let displayValue = "0";

  updateDisplay(displayValue);
}

// INTIALISATION FUNCTIONS
export function addButtonClickEvents() {
  return true;
}

// DISPLAY FUNCTIONS
export function updateDisplay(value) {
  let output = document.getElementById("output");
  output.textContent = value;
}

// OPERATOR FUNCTIONS

export function add(firstNum, secondNum) {
  return firstNum + secondNum;
}

export function subtract(firstNum, secondNum) {
  return firstNum - secondNum;
}

export function multiply(firstNum, secondNum) {
  return firstNum * secondNum;
}

export function divide(firstNum, secondNum) {
  if (secondNum === 0) {
    return "Cannot divide by zero";
  } else {
    return firstNum / secondNum;
  }
}

export function selectOperation(operator, firstNum, secondNum) {
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
