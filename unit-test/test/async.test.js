import { sayHelloAsync } from "../src/async";

test("test async function", async () => {
  const result = await sayHelloAsync("Amien");

  expect(result).toBe("Hello Amien");
});

test("test async matcher", async () => {
  await expect(sayHelloAsync("amien")).resolves.toBe("Hello amien");
  await expect(sayHelloAsync()).rejects.toBe("Name is empty");
})