import { sayHello } from "../src/sayHello";

test("say Hello success", () => {
  expect(sayHello("eko")).toBe("Hello eko");
});

test.failing("say Hello error", () => {
  sayHello(null);
})

test("say Hello matchers", () => {
  expect(() => sayHello(null).toThrow());
})