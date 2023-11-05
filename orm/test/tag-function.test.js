function tagFunction(array, ...args) {
  console.info(array);
  console.info(args);
}

test("tag function", () => {
  const name = "amien";
  const lastName = "kurniawan";

  tagFunction`Hello ${name} ${lastName}!, How are yout?`;
  tagFunction`Bye ${name} ${lastName}!, see you later`;

});

test("Tag function SQL", () => {
  const name = "Amien";
  const age = 30;

  tagFunction`SELECT * FROM users WHERE name = ${name} AND age =${age}`;

})