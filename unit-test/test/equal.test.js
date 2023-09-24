test("test toBe", () => {
  const name = "Amien";
  const hello = `Hello ${name}`;

  expect(hello).toBe("Hello Amien");
});

test("test toEqual", () => {

  let person = { id: "amien" };

  Object.assign(person, {
    name: "Amien"
  })

  expect(person).toEqual({ id: "amien", name: "Amien" });
});