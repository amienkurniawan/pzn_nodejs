import { sum } from "../src/sum.js";

test("Sum(1,2) must be 3", () => {
  const result = sum(1, 2);

  expect(result).toBe(3);
});
test("Sum(1,2) must be 3 1", () => {
  const result = sum(1, 2);

  expect(result).toBe(3);
});
test("Sum(1,2) must be 3 2", () => {
  const result = sum(1, 2);

  expect(result).toBe(3);
});
