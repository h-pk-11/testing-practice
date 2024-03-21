import analyzeArray from "./analyzeArray.js";
import capitalize from "./capitalize.js";
import reverseString from "./reverseString.js";
import caesarCipher from "./caesarCipher.js";
import { calculator } from "./calculator.js";

test('capitalize "james Mcavoy"', () => {
  expect(capitalize("james Mcavoy")).toBe("James Mcavoy");
});

test('reverse the string "Tron"', () => {
  expect(reverseString("Tron")).toBe("norT");
});

test("calculator between 2 and 5", () => {
  expect(calculator.add(2, 5)).toEqual(7);
  expect(calculator.subtract(2, 5)).toEqual(-3);
  expect(calculator.divide(2, 5)).toEqual(0.4);
  expect(calculator.multiply(2, 5)).toEqual(10);
});

test("encrypt the string", () => {
  expect(caesarCipher("c", 1)).toMatch(/d/i);
  expect(caesarCipher("abcdefghilmnopqrstuvwxyz", 5)).toMatch(/[a-z]+/i);
  expect(
    caesarCipher("Today is thursday. You must send your report!", 5)
  ).toMatch(/YTIFD NX YMZWXIFD. DTZ RZXY XJSI DTZW WJUTWY!/);
});

test("check analyzed array", () => {
  expect(analyzeArray([])).toEqual({});
  expect(analyzeArray([1, 2, 3, -4, 5])).toEqual({
    average: 1.4,
    min: -4,
    max: 5,
    length: 5,
  });
});
