import { sumAll } from "../src/sum";

describe("When call sumAll()", () => {
  it("should get 30 with parameter [10,10,10]", () => {

    expect(sumAll([10, 10, 10])).toBe(30);

  });

  it("should get 20 with parameter [10,10,10]", () => {

    expect(sumAll([10, 10])).toBe(20);

  });
});