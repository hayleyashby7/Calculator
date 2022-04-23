const { add, subtract, multiply, divide } = require("../scripts/calculator");

describe("Add", () => {
  test("Add 2 numbers together and return result", () => {
    const firstNumber = 2;
    const secondNumber = 3;
    const result = 5;

    expect(add(firstNumber, secondNumber)).toBe(result);
  });
});

describe("Subtract", () => {
  test("Subtract second number from first and return result", () => {
    const firstNumber = 10;
    const secondNumber = 4;
    const result = 6;

    expect(subtract(firstNumber, secondNumber)).toBe(result);
  });
});

describe("Multiply", () => {
  test("Multiply 2 numbers together and return result", () => {
    const firstNumber = 2;
    const secondNumber = 3;
    const result = 6;

    expect(multiply(firstNumber, secondNumber)).toBe(result);
  });
});

describe("Divide", () => {
  test("Divide first number by second and return result", () => {
    const firstNumber = 8;
    const secondNumber = 2;
    const result = 4;

    expect(divide(firstNumber, secondNumber)).toBe(result);
  });
});

describe("DivideZero", () => {
  test("Divide by zero warning message returned", () => {
    const firstNumber = 8;
    const secondNumber = 0;
    const result = "Cannot divide by zero";

    expect(divide(firstNumber, secondNumber)).toBe(result);
  });
});
