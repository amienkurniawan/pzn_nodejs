test("strings", () => {
  const name = "Amien Kurniawan";
  expect(name).toBe("Amien Kurniawan");
  expect(name).toMatch(/Kur/);

  expect(name).not.toMatch(/Justin/);
});