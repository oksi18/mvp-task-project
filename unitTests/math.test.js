const {
  add,
  subtract,
  multiply,
  divide
} = require("../src/utils/math");

test("adds numbers correctly", () => {
  expect(add(2, 3)).toBe(5);
});

test("subtracts numbers correctly", () => {
  expect(subtract(10, 4)).toBe(6);
});

test("multiplies numbers correctly", () => {
  expect(multiply(3, 5)).toBe(15);
});

test("divides numbers correctly", () => {
  expect(divide(20, 5)).toBe(4);
});

test("division by zero throws error", () => {
  expect(() => divide(10, 0)).toThrow("Division by zero");
});

test("negative numbers addition", () => {
  expect(add(-2, -3)).toBe(-5);
});

test("decimal multiplication", () => {
  expect(multiply(2.5, 2)).toBe(5);
});