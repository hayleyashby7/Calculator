"use strict";

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

module.exports = { add, subtract, multiply, divide };
