/* test/calculatorTEST.js */
import { expect } from "chai";
import { JSDOM } from "jsdom";
import Sinon from "sinon";
import { readFileSync } from "fs";
import {
  setDisplayValue,
  buttonAction,
  Calculator,
} from "../src/calculator.js";
let calculator = new Calculator();

describe("Operator Functions", function () {
  beforeEach(function () {
    calculator.reset();
  });

  describe("add", function () {
    // Addition operator test
    it("should add 2 numbers together and return result", function () {
      const firstNumber = 2;
      const secondNumber = 3;
      const result = 5;
      expect(calculator.add(firstNumber, secondNumber)).to.equal(result);
    });
  });
  describe("subtract", function () {
    // Subtraction operator test
    it("should subtract second number from first and return result", function () {
      const firstNumber = 10;
      const secondNumber = 4;
      const result = 6;
      expect(calculator.subtract(firstNumber, secondNumber)).to.equal(result);
    });

    it("should subtract 1 from 1 and return 0", function () {
      const firstNumber = 1;
      const secondNumber = 1;
      const result = 0;
      expect(calculator.subtract(firstNumber, secondNumber)).to.equal(result);
    });
  });
  describe("multiply", function () {
    // Multiplication operator test
    it("should multiply 2 numbers and return result", function () {
      const firstNumber = 2;
      const secondNumber = 3;
      const result = 6;
      expect(calculator.multiply(firstNumber, secondNumber)).to.equal(result);
    });

    it("should multiply 1 by 1 numbers and return 1", function () {
      const firstNumber = 1;
      const secondNumber = 1;
      const result = 1;
      expect(calculator.multiply(firstNumber, secondNumber)).to.equal(result);
    });
  });
  describe("divide", function () {
    // Division operator tests
    it("should divide first number by second and return result", function () {
      const firstNumber = 8;
      const secondNumber = 2;
      const result = 4;
      expect(calculator.divide(firstNumber, secondNumber)).to.equal(result);
    });

    it("should divide 1 by 1 and return 1", function () {
      const firstNumber = 1;
      const secondNumber = 1;
      const result = 1;
      expect(calculator.divide(firstNumber, secondNumber)).to.equal(result);
    });

    it("should return 'Divide by zero' warning message", function () {
      const firstNumber = 8;
      const secondNumber = 0;
      const result = "Cannot divide by zero";
      expect(calculator.divide(firstNumber, secondNumber)).to.equal(result);
    });
  });

  describe("selectOperation", function () {
    // Operator selection tests
    it("should returns correct result from Add function when + input", function () {
      calculator.operator = "+";
      calculator.lastNum = "2";
      calculator.updateCurrentNum("3");
      const result = "5";

      calculator.beginCalculation();
      expect(calculator.currentTotal).to.equal(result);
    });

    it("should returns correct result from Subtract function when - input", function () {
      calculator.operator = "-";
      calculator.lastNum = "3";
      calculator.updateCurrentNum("2");
      const result = "1";

      calculator.beginCalculation();
      expect(calculator.currentTotal).to.equal(result);
    });

    it("should returns correct result from Multiply function when * input", function () {
      calculator.operator = "*";
      calculator.lastNum = "2";
      calculator.updateCurrentNum("3");
      const result = "6";

      calculator.beginCalculation();
      expect(calculator.currentTotal).to.equal(result);
    });

    it("should returns correct result from Divide function when / input", function () {
      calculator.operator = "/";
      calculator.lastNum = "8";
      calculator.updateCurrentNum("4");
      const result = "2";

      calculator.beginCalculation();
      expect(calculator.currentTotal).to.equal(result);
    });
  });
});

// NEED ZERO DIVISION AND INVALID OPERATOR TESTS

/* describe("Event Functions", function () {
  describe("buttonAction", function () {
    describe("Number Button", function () {
      it("should call setNumber function once", function () {
        let spySetNum = Sinon.spy(setNumber);
        buttonAction("number", "1");
      });

      it("should call setDisplayValue function once", function () {});
    });
    describe("Operator Button", function () {
      it("should call setOperator function once", function () {});

      it("should call setDisplayValue function once", function () {});
    });
    describe("Number Function Button", function () {
      it("should call handleFunction function once", function () {});
    });
  });
});

describe("Display Functions", function () {
  describe("setDisplayValue", function () {
    it("should replace display value of 0 entirely with new input value", function () {
      const newValue = "24";

      setDisplayValue(newValue);

      expect(calculator.displayValue).to.equal(newValue);
    });
  });

  /*describe("Update Display", function () {
  beforeEach(() => {
    const dom = new JSDOM(
      `<html>
                 <body>
                     <div>
                         <p id="display"></p>
                     </div>
                </body>
           </html>`,
      { url: "http://localhost" }
    );
    global.window = dom.window;
    global.document = dom.window.document;
  });

  it("should update the text content of display element", function () {
    const value = "TEST";
    updateDisplay(value);
    expect(document.getElementById("display").innerHTML).to.equal(value);
  });
}); */
