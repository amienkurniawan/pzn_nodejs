test("array simple", () => {
  const names = ["amien", "kurniawan"];

  expect(names).toEqual(["amien", "kurniawan"]);
  expect(names).toContain("amien");
});

test("array object", () => {
  const persons = [{
    name: "amien"
  }, {
    name: "Rudy"
  }];

  expect(persons).toContainEqual({
    name: "amien"
  });
});