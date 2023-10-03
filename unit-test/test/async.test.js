import { sayHelloAsync } from "../src/async";

test("test async function", async () => {
  const result = await sayHelloAsync("Amien");

  expect(result).toBe("Hello Amien");
});