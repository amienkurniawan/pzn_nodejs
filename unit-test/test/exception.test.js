import { MyException, callMe } from "../src/exception.js";

test("exception", () => {
  expect(() => callMe("amien")).toThrow();
  expect(() => callMe("amien")).toThrow(MyException);
  expect(() => callMe("amien")).toThrow("Exception happens");
});


test("exception not happened", () => {
  expect(callMe("budi")).toBe("OK");
});

