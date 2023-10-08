import { sumAll } from "../src/sum";

const table = [
  [
    [10, 10, 10], 30
  ],
  [
    [15, 10, 10, 10], 45
  ],
  [
    [10, 10], 20
  ],
  [
    [], 0
  ],
];

test.each(table)("Test sumAll(%s) should result %i", (numbers, expected) => {

  expect(sumAll(numbers)).toBe(expected);

});

const objects = [
  { numbers: [10, 10, 10], expected: 30 },
  { numbers: [15, 10, 10, 10], expected: 45 },
  { numbers: [10, 10], expected: 20 },
  { numbers: [], expected: 0 }
];

test.each(objects)("Test objects sumAll($numbers) should result $expected", ({ numbers, expected }) => {

  expect(sumAll(numbers)).toBe(expected);

});