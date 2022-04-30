/**
 * @jest-environment jsdom
 */

const {
  add,
  subtract,
  multiply,
  divide,
  selectOperation,
  updateDisplay,
  addButtonClick,
} = require("../calculator");

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

describe("Select Add function", () => {
  test("Returns correctly from  Add function when + input", () => {
    const operator = "+";
    const firstNumber = 2;
    const secondNumber = 3;
    const result = 5;

    expect(selectOperation(operator, firstNumber, secondNumber)).toBe(result);
  });
});

describe("Select Subtract function", () => {
  test("Returns correctly from Subtract function when - input", () => {
    const operator = "-";
    const firstNumber = 3;
    const secondNumber = 2;
    const result = 1;

    expect(selectOperation(operator, firstNumber, secondNumber)).toBe(result);
  });
});

describe("Select Multiply function", () => {
  test("Returns correctly from Multiply function when * input", () => {
    const operator = "*";
    const firstNumber = 2;
    const secondNumber = 3;
    const result = 6;

    expect(selectOperation(operator, firstNumber, secondNumber)).toBe(result);
  });
});

describe("Select Divide function", () => {
  test("Returns correctly from Divide function when / input", () => {
    const operator = "/";
    const firstNumber = 8;
    const secondNumber = 4;
    const result = 2;

    expect(selectOperation(operator, firstNumber, secondNumber)).toBe(result);
  });
});

describe("Invalid Operator", () => {
  test("Returns warning over invalid operator", () => {
    const operator = "$";
    const firstNumber = 8;
    const secondNumber = 4;
    const result = "Invalid Operator";

    expect(selectOperation(operator, firstNumber, secondNumber)).toBe(result);
  });
});

describe("Update Display", () => {
  test("Updates text content of display element", () => {
    document.body.innerHTML = '<div id="display"></div>';
    const value = "TEST";

    expect(document.getElementById("display").textContent).toBe("");
    updateDisplay(value);
    expect(document.getElementById("display").textContent).toBe(value);
  });
});

/*describe("AddButtonClick", () => {
  test("Adds click event listener to buttons", () => {
    document.body.innerHTML =
      '<div class="buttons"><div class="button">1</div><div class="button">2</div><div class="button">2</div>';
    
    addButtonClick();

    let buttons = document.getElementsByClassName('button');

    for (button in buttons) {
      expect(button.)
    }


  });
});*/
