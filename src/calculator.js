"use strict";

export const calculator = {
  lastNum: 0,
  currentNum: 0,
  operator: "",
  currentTotal: 0,
  displayValue: "0",
};

calculatorInit();

function calculatorInit() {
  updateDisplay(calculator.lastNum.toString());

  addButtonClickEvents();
}

// INTIALISATION FUNCTIONS
export function addButtonClickEvents() {
  let buttons = document.querySelectorAll("button");
  buttons.forEach((element) => {
    element.addEventListener("click", buttonClick, false);
  });
}

// DISPLAY FUNCTIONS
export function updateDisplay(value) {
  if (value.length >= 8) {
    value = value.slice(-8);
  }

  document.getElementById("display").innerHTML = value;
}

// EVENT FUNCTIONS
function buttonClick() {
  calculateNewDisplayValue(this.innerHTML);
  updateDisplay(calculator.displayValue);
}

export function calculateNewDisplayValue(value) {
  // Check if need to replace 0 as default value
  if (calculator.displayValue == "0") {
    calculator.displayValue = value;
  } else {
    calculator.displayValue += value;
  }
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
