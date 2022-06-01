"use strict";
import { readFileSync } from "node:fs";
import { JSDOM } from "/jsdom";
import "/jsdom-global/register.js";

const html = readFileSync("index.html");
const DOM = new JSDOM(html);

const document = DOM.window.document;

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
			throw new TypeError("Catastrophic user error (divide by zero)");
		} else {
			return firstNum / secondNum;
		}
	}

	performCalculation(operator, firstNum, secondNum) {
		// Sanity checks
		if (Number.isNaN(firstNum)) {
			throw new TypeError("First operand is not a number");
		}

		if (Number.isNaN(secondNum)) {
			throw new TypeError("Second operand is not a number");
		}

		switch (operator) {
			case "+":
				return this.add(firstNum, secondNum);

			case "-":
				return this.subtract(firstNum, secondNum);

			case "x":
				return this.multiply(firstNum, secondNum);

			case "/":
				return this.divide(firstNum, secondNum);
			default:
				throw new TypeError("Invalid Operator");
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
		let update = false;

		switch (true) {
			case value == "":
				update = true;
				break;

			case this._currentTotal != "":
				// Multiple totalled operations
				calculate = true;
				break;

			case this._currentNum != "" && this._lastNum != "":
				// Last operation needs to be totalled before progressing
				if (this._operator == "") {
					this._operator = value;
				}
				calculate = true;
				break;

			default:
				update = true;
				break;
		}

		if (calculate) {
			// Update running total before progressing further
			update = this.beginCalculation();
			this._currentNum = this._currentTotal;
		}

		if (update) {
			// move current number to last number to allow next operand to be entered
			this._operator = value;
			this._lastNum = this._currentNum;
			this._currentNum = "";
		} else {
			// Error updating data - reset
			calculatorInit();
		}
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
		let successful = false;

		try {
			this.currentTotal = this.performCalculation(this.operator, parseFloat(this.lastNum), parseFloat(this.currentNum)).toString();

			this.displayValue = this.currentTotal;
			successful = true;
		} catch (e) {
			console.log(e);
			//	alert(e);
		}
		return successful;
	}
}

let calculator = new Calculator();

calculatorInit(calculator, true);

export function calculatorInit(calcObj, firstTime = false) {
	if (firstTime) {
		addButtonClickEvents();
	} else {
		calcObj.reset();
	}
	updateDisplay(calcObj.displayValue);
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

export function setDisplayValue(calcObj, value) {
	calcObj.displayValue = value;
}

// EVENT FUNCTIONS
function buttonClick(element) {
	buttonAction(calculator, element.target.className, element.target.innerHTML);
	updateDisplay(calculator.displayValue);
}

export function buttonAction(calcObj, buttonClass, buttonValue) {
	switch (buttonClass) {
		case "number":
			calcObj.updateCurrentNum(buttonValue);
			setDisplayValue(calcObj, calcObj.currentNum);
			break;

		case "operator":
			calcObj.operator = buttonValue;
			setDisplayValue(calcObj, calcObj.operator);
			break;

		case "utility":
			handleUtility(calcObj, buttonValue);
			break;

		default:
			break;
	}
}

export function handleUtility(calcObj, value) {
	switch (value) {
		case "=":
			equalsFunction(calcObj);
			break;
		case "AC":
			calculatorInit(calcObj);
			break;
		default:
			break;
	}

	function equalsFunction(calcObj) {
		if (calcObj.beginCalculation()) {
			// Successful calculation
			calcObj.lastNum = calcObj.currentTotal;
			calcObj.currentNum = "";
		} else {
			//Unsuccessful calculation - reset
			calculatorInit(calcObj);
		}
	}
}
