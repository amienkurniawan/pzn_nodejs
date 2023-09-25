test("string.not", () => {
  const name = "Amien Kurniawan";

  expect(name).not.toBe("Rudy");
  expect(name).not.toEqual("Jason");
  expect(name).not.toMatch(/Jason/);

});

test("string.not", () => {
  const value = 2 + 2;
  expect(value).not.toBeGreaterThan(6);
  expect(value).not.toBeLessThan(3);
  expect(value).not.toBe(10);
});