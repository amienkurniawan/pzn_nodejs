import { sum } from "../src/sum";

beforeEach(() => {
  console.info("Before Each");
});
afterEach(() => {
  console.info("After Each");
});

test("first test", () => {
  expect(sum(10, 10)).toBe(20);
  console.info("first test running")
});

test("first test", () => {
  expect(sum(10, 14)).toBe(24);
  console.info("second test running")
});

