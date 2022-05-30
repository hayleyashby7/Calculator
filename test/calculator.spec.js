/* test/calculatorTEST.js */
import { expect } from "chai";
import { JSDOM } from "jsdom";
import Sinon from "sinon";
import {
  setDisplayValue,
  handleUtility,
  buttonAction,
  Calculator,
} from "../calculator.js";

let calculatorTEST = new Calculator();
let spy;

describe("Calculation Functions", function () {
  beforeEach(function () {
    calculatorTEST.reset();
  });

  describe("add", function () {
    // Addition operator test
    it("should add 2 numbers together and return result", function () {
      const firstNumber = 2;
      const secondNumber = 3;
      const result = 5;
      expect(calculatorTEST.add(firstNumber, secondNumber)).to.equal(result);
    });
  });
  describe("subtract", function () {
    // Subtraction operator test
    it("should subtract second number from first and return result", function () {
      const firstNumber = 10;
      const secondNumber = 4;
      const result = 6;
      expect(calculatorTEST.subtract(firstNumber, secondNumber)).to.equal(
        result
      );
    });

    it("should subtract 1 from 1 and return 0", function () {
      const firstNumber = 1;
      const secondNumber = 1;
      const result = 0;
      expect(calculatorTEST.subtract(firstNumber, secondNumber)).to.equal(
        result
      );
    });
  });
  describe("multiply", function () {
    // Multiplication operator test
    it("should multiply 2 numbers and return result", function () {
      const firstNumber = 2;
      const secondNumber = 3;
      const result = 6;
      expect(calculatorTEST.multiply(firstNumber, secondNumber)).to.equal(
        result
      );
    });

    it("should multiply 1 by 1 numbers and return 1", function () {
      const firstNumber = 1;
      const secondNumber = 1;
      const result = 1;
      expect(calculatorTEST.multiply(firstNumber, secondNumber)).to.equal(
        result
      );
    });
  });
  describe("divide", function () {
    // Division operator tests
    it("should divide first number by second and return result", function () {
      const firstNumber = 8;
      const secondNumber = 2;
      const result = 4;
      expect(calculatorTEST.divide(firstNumber, secondNumber)).to.equal(result);
    });

    it("should divide 1 by 1 and return 1", function () {
      const firstNumber = 1;
      const secondNumber = 1;
      const result = 1;
      expect(calculatorTEST.divide(firstNumber, secondNumber)).to.equal(result);
    });
  });
});

describe("Operator Functions", function () {
  // Operator selection tests

  it("should return correct result from Add function when + input", function () {
    calculatorTEST.operator = "+";
    calculatorTEST.lastNum = "2";
    calculatorTEST.updateCurrentNum("3");
    const result = "5";

    calculatorTEST.beginCalculation();
    expect(calculatorTEST.currentTotal).to.equal(result);
  });

  it("should return correct result from Subtract function when - input", function () {
    calculatorTEST.operator = "-";
    calculatorTEST.lastNum = "3";
    calculatorTEST.updateCurrentNum("2");
    const result = "1";

    calculatorTEST.beginCalculation();
    expect(calculatorTEST.currentTotal).to.equal(result);
  });

  it("should return correct result from Multiply function when * input", function () {
    calculatorTEST.operator = "*";
    calculatorTEST.lastNum = "2";
    calculatorTEST.updateCurrentNum("3");
    const result = "6";

    calculatorTEST.beginCalculation();
    expect(calculatorTEST.currentTotal).to.equal(result);
  });

  it("should return correct result from Divide function when / input", function () {
    calculatorTEST.operator = "/";
    calculatorTEST.lastNum = "8";
    calculatorTEST.updateCurrentNum("4");
    const result = "2";

    calculatorTEST.beginCalculation();
    expect(calculatorTEST.currentTotal).to.equal(result);
  });
});

describe("Utility Functions", function () {
  beforeEach(function () {
    calculatorTEST.reset();
  });

  describe("Equals", function () {
    after(function () {
      spy.restore();
    });

    it("should call beginCalculation()", function () {
      calculatorTEST.operator = "+";
      calculatorTEST.lastNum = "2";
      calculatorTEST.updateCurrentNum("3");
      const button = "=";
      spy = Sinon.spy(calculatorTEST, "beginCalculation");

      handleUtility(calculatorTEST, button);

      Sinon.assert.calledOnce(spy);
    });

    it("should update last number in Calculator object with updated current total ", function () {
      calculatorTEST.operator = "+";
      calculatorTEST.lastNum = "6";
      calculatorTEST.updateCurrentNum("2");

      const button = "=";

      handleUtility(calculatorTEST, button);

      expect(calculatorTEST.lastNum).to.equal(calculatorTEST.currentTotal);
    });

    it("should clear the current number in Calculator object ", function () {
      calculatorTEST.operator = "/";
      calculatorTEST.lastNum = "98";
      calculatorTEST.updateCurrentNum("2");

      const button = "=";

      handleUtility(calculatorTEST, button);

      expect(calculatorTEST.currentNum).to.equal("");
    });

    it("should fail calculaton attempt if current number is not populated", function () {
      calculatorTEST.operator = "+";
      calculatorTEST.lastNum = "2";
      calculatorTEST.updateCurrentNum("");

      expect(calculatorTEST.beginCalculation()).to.equal(false);
    });

    it("should fail calculaton attempt if last number is not populated", function () {
      calculatorTEST.operator = "*";
      calculatorTEST.lastNum = "";
      calculatorTEST.updateCurrentNum("25");

      expect(calculatorTEST.beginCalculation()).to.equal(false);
    });

    it("should fail calculaton attempt if operator is not populated", function () {
      calculatorTEST.operator = "";
      calculatorTEST.lastNum = "469479";
      calculatorTEST.updateCurrentNum("1456546");

      expect(calculatorTEST.beginCalculation()).to.equal(false);
    });
  });

  describe("All Clear", function () {
    after(function () {
      spy.restore();
    });

    it("calls reset method for calculator object", function () {
      calculatorTEST.operator = "+";
      calculatorTEST.lastNum = "2";
      calculatorTEST.updateCurrentNum("3");
      calculatorTEST.currentTotal = "25";
      calculatorTEST.displayValue = "5";
      const button = "AC";
      spy = Sinon.spy(calculatorTEST, "reset");

      handleUtility(calculatorTEST, button);
      Sinon.assert.calledOnce(spy);
    });
  });
});

describe("Event Functions", function () {
  beforeEach(function () {
    calculatorTEST.reset();
  });

  describe("Number button", function () {
    it("should append the new number onto current number", function () {
      const currentNum = "678";
      calculatorTEST.currentNum = currentNum;
      const newNum = "123";

      buttonAction(calculatorTEST, "number", newNum);
      expect(calculatorTEST.currentNum).to.equal(currentNum + newNum);
    });

    it("should update display value with new current number", function () {
      calculatorTEST.currentNum = "987654";

      buttonAction(calculatorTEST, "number", "321");
      expect(calculatorTEST.displayValue).to.equal(calculatorTEST.currentNum);
    });
  });

  describe("Operator button", function () {
    it("should update the operator value to new value", function () {
      const currentOp = "+";
      calculatorTEST.operator = currentOp;
      const newOp = "/";

      buttonAction(calculatorTEST, "operator", newOp);
      expect(calculatorTEST.operator).to.equal(newOp);
    });

    it("should update display value with new operator", function () {
      calculatorTEST.operator = "-";

      buttonAction(calculatorTEST, "operator", "*");
      expect(calculatorTEST.displayValue).to.equal(calculatorTEST.operator);
    });
  });

  describe("Utility button", function () {
    it("should perform equals function if '=' passed", function () {
      calculatorTEST.operator = "+";
      calculatorTEST.lastNum = "45";
      calculatorTEST.updateCurrentNum("55");
      calculatorTEST.currentTotal = "0";
      const button = "=";
      const result = "100";

      buttonAction(calculatorTEST, "number utility", button);
      expect(calculatorTEST.currentTotal).to.equal(result);
    });

    after(function () {
      spy.restore();
    });
    it("should perform all clear function if 'AC' passed", function () {
      calculatorTEST.operator = "+";
      calculatorTEST.lastNum = "44565";
      calculatorTEST.updateCurrentNum("375");
      calculatorTEST.currentTotal = "100";
      const button = "AC";
      spy = Sinon.spy(calculatorTEST, "reset");

      buttonAction(calculatorTEST, "number utility", button);
      Sinon.assert.calledOnce(spy);
    });
  });
});

describe("Display Functions", function () {
  beforeEach(function () {
    calculatorTEST.reset();
  });

  describe("setDisplayValue", function () {
    it("should replace display value of 0 entirely with new input value", function () {
      const newValue = "24";

      setDisplayValue(calculatorTEST, newValue);

      expect(calculatorTEST.displayValue).to.equal(newValue);
    });
  });
});

describe("Exception handling", function () {
  beforeEach(function () {
    calculatorTEST.reset();
  });

  it("should return TypeError if division by 0 attempted", function () {
    const firstNumber = 87;
    const secondNumber = 0;
    const error = "Catastrophic user error (divide by zero)";

    expect(() => calculatorTEST.divide(firstNumber, secondNumber)).to.throw(
      TypeError,
      error
    );
  });

  it("should return a TypeError if invalid operator input", function () {
    const error = "Invalid Operator";

    expect(() => calculatorTEST.performCalculation("$", "2", "3")).to.throw(
      TypeError,
      error
    );
  });
});
