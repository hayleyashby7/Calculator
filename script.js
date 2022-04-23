"use strict";

calculator();

function calculator() {}

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
    alert("Cannot divide by zero");
  } else {
    return firstNum / secondNum;
  }
}
