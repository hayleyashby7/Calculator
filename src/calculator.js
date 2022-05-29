"use strict";

export class MathFunctions {
  constructor() {}

  add(firstNum, secondNum) {
    return firstNum + secondNum;
  }

  subtract(firstNum, secondNum) {
    return firstNum - secondNum;
  }

  multiply(firstNum, secondNum) {
    return firstNum * secondNum;
  }

  divide(firstNum, secondNum) {
    if (secondNum === 0) {
      throw "Cannot divide by zero";
    } else {
      return firstNum / secondNum;
    }
  }

  performCalculation(operator, firstNum, secondNum) {
    switch (operator) {
      case "+":
        return this.add(firstNum, secondNum);

      case "-":
        return this.subtract(firstNum, secondNum);

      case "*":
        return this.multiply(firstNum, secondNum);

      case "/":
        return this.divide(firstNum, secondNum);
      default:
        throw "Invalid Operator";
    }
  }
}

export class Calculator extends MathFunctions {
  constructor() {
    super();
    this.lastNum = "";
    this.currentNum = "";
    this.operator = "";
    this.currentTotal = "";
    this.displayValue = "0";
  }

  // Getters/Setters
  get lastNum() {
    return this._lastNum;
  }

  set lastNum(value) {
    this._lastNum = value;
  }

  get currentNum() {
    return this._currentNum;
  }

  set currentNum(value) {
    this._currentNum = value;
  }

  get operator() {
    return this._operator;
  }

  set operator(value) {
    //Check if part of series of calculations
    let calculate = false;

    switch (true) {
      case value == "":
        break;
      case this._currentTotal != "":
        // Multiple totalled operations
        calculate = true;
        break;

      case this._currentNum != "" && this._lastNum != "":
        // last operation needs to be totalled before progressing
        if (this._operator == "") {
          this._operator = value;
        }
        calculate = true;
        break;

      default:
        break;
    }

    if (calculate) {
      // Update running total before progressing further
      this.beginCalculation();
      this._currentNum = this._currentTotal;
    }

    // move current number to last number to allow next operand to be entered
    this._operator = value;
    this._lastNum = this._currentNum;
    this._currentNum = "";
  }

  get currentTotal() {
    return this._currentTotal;
  }

  set currentTotal(value) {
    this._currentTotal = value;
  }

  get displayValue() {
    return this._displayValue;
  }

  set displayValue(value) {
    this._displayValue = value;
  }

  reset() {
    this.lastNum = "";
    this.currentNum = "";
    this.operator = "";
    this.currentTotal = "";
    this.displayValue = "0";
  }

  updateCurrentNum(value) {
    if (this.currentNum === "0") {
      this.currentNum = value;
    } else {
      let currentNum = this.currentNum;
      this.currentNum = currentNum + value;
    }
  }

  beginCalculation() {
    try {
      this.currentTotal = this.performCalculation(
        this.operator,
        parseFloat(this.lastNum),
        parseFloat(this.currentNum)
      ).toString();

      this.displayValue = this.currentTotal;
      console.log(calculator);
    } catch (e) {
      alert("ERROR: " + e);
    }
  }
}

let calculator = new Calculator();

calculatorInit(true);

function calculatorInit(firstTime = false) {
  if (firstTime) {
    addButtonClickEvents();
  } else {
    calculator.reset();
  }
  updateDisplay(calculator.displayValue);
}

// INTIALISATION FUNCTIONS
function addButtonClickEvents() {
  let buttons = document.querySelectorAll("button");
  buttons.forEach((element) => {
    element.addEventListener("click", buttonClick, false);
  });
}

// DISPLAY FUNCTIONS
function updateDisplay(value) {
  if (value.length >= 8) {
    value = value.slice(-8);
  }
  document.getElementById("display").innerHTML = value;
}

export function setDisplayValue(value) {
  calculator.displayValue = value;
  console.log(calculator);
}

// EVENT FUNCTIONS
function buttonClick(element) {
  buttonAction(element.target.className, element.target.innerHTML);
  updateDisplay(calculator.displayValue);
}

export function buttonAction(buttonClass, buttonValue) {
  switch (buttonClass) {
    case "number":
      calculator.updateCurrentNum(buttonValue);
      setDisplayValue(calculator.currentNum);
      break;

    case "operator":
      calculator.operator = buttonValue;
      setDisplayValue(calculator.operator);
      console.log(calculator);
      break;

    case "number function":
      handleFunction(buttonValue);
      break;

    default:
      break;
  }
}

export function handleFunction(value) {
  switch (value) {
    case "=":
      calculator.beginCalculation();
      calculator.lastNum = calculator.currentTotal;
      calculator.currentNum = "";
      break;
    case "AC":
      calculatorInit();
      break;
    default:
      break;
  }
}
