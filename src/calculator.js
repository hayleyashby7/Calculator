"use strict";

const calculator = {
  currentValue: 0,
  displayValue: 0,
  firstNumber: 0,
  secondNumber: 0,
  operator: "",
};

calculator();

function calculator() {
  updateDisplay(calculator.displayValue);

  addButtonClickEvents();
}

// INTIALISATION FUNCTIONS
export function addButtonClickEvents() {
  let buttons = document.querySelectorAll("button");
  buttons.forEach((element) => {
    console.log(element);
    element.addEventListener("click", buttonClick, false);
  });
}

// DISPLAY FUNCTIONS
export function updateDisplay() {
  let currentValue = calculator.currentValue;

  console.log(
    "Current Value: " + currentValue + " and Button Pressed: " + value
  );
  if (currentValue == 0) {
    console.log("current value set to 0");
    // No value - start with input value
    document.getElementById("display").innerHTML = value;
  } else {
    console.log("current value NOT 0");
    document.getElementById("display").innerHTML += value;
  }
}

// EVENT FUNCTIONS
function buttonClick() {
  calculateNewDisplayValue(this.innerHTML);
}

function calculateNewDisplayValue(value) {
  calculator.displayValue = value;
  updateDisplay();
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
