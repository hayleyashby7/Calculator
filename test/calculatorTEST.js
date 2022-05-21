/* test/calculatorTEST.js */
import { expect } from "chai";

import {
  add,
  subtract,
  multiply,
  divide,
  selectOperation,
} from "../calculator.js";

describe("Operator Functions", function () {
  describe("add", function () {
    // Addition operator test
    it("should add 2 numbers together and return result", function () {
      const firstNumber = 2;
      const secondNumber = 3;
      const result = 5;
      expect(add(firstNumber, secondNumber)).to.equal(result);
    });
  });
  describe("subtract", function () {
    // Subtraction operator test
    it("should subtract second number from first and return result", function () {
      const firstNumber = 10;
      const secondNumber = 4;
      const result = 6;
      expect(subtract(firstNumber, secondNumber)).to.equal(result);
    });

    it("should subtract 1 from 1 and return 0", function () {
      const firstNumber = 1;
      const secondNumber = 1;
      const result = 0;
      expect(subtract(firstNumber, secondNumber)).to.equal(result);
    });
  });
  describe("multiply", function () {
    // Multiplication operator test
    it("should multiply 2 numbers and return result", function () {
      const firstNumber = 2;
      const secondNumber = 3;
      const result = 6;
      expect(multiply(firstNumber, secondNumber)).to.equal(result);
    });

    it("should multiply 1 by 1 numbers and return 1", function () {
      const firstNumber = 1;
      const secondNumber = 1;
      const result = 1;
      expect(multiply(firstNumber, secondNumber)).to.equal(result);
    });
  });
  describe("divide", function () {
    // Division operator tests
    it("should divide first number by second and return result", function () {
      const firstNumber = 8;
      const secondNumber = 2;
      const result = 4;
      expect(divide(firstNumber, secondNumber)).to.equal(result);
    });

    it("should divide 1 by 1 and return 1", function () {
      const firstNumber = 1;
      const secondNumber = 1;
      const result = 1;
      expect(divide(firstNumber, secondNumber)).to.equal(result);
    });

    it("should return 'Divide by zero' warning message", function () {
      const firstNumber = 8;
      const secondNumber = 0;
      const result = "Cannot divide by zero";
      expect(divide(firstNumber, secondNumber)).to.equal(result);
    });
  });

  describe("selectOperation", function () {
    // Operator selection tests

    it("should returns correct result from Add function when + input", function () {
      const operator = "+";
      const firstNumber = 2;
      const secondNumber = 3;
      const result = 5;
      expect(selectOperation(operator, firstNumber, secondNumber)).to.equal(
        result
      );
    });

    it("should returns correct result from Subtract function when - input", function () {
      const operator = "-";
      const firstNumber = 3;
      const secondNumber = 2;
      const result = 1;
      expect(selectOperation(operator, firstNumber, secondNumber)).to.equal(
        result
      );
    });

    it("should returns correct result from Multiply function when * input", function () {
      const operator = "*";
      const firstNumber = 2;
      const secondNumber = 3;
      const result = 6;
      expect(selectOperation(operator, firstNumber, secondNumber)).to.equal(
        result
      );
    });

    it("should returns correct result from Divide function when / input", function () {
      const operator = "/";
      const firstNumber = 8;
      const secondNumber = 4;
      const result = 2;
      expect(selectOperation(operator, firstNumber, secondNumber)).to.equal(
        result
      );
    });

    it("should return warning over invalid operator", function () {
      const operator = "$";
      const firstNumber = 8;
      const secondNumber = 4;
      const result = "Invalid Operator";
      expect(selectOperation(operator, firstNumber, secondNumber)).to.equal(
        result
      );
    });
  });
});
