beforeAll(() => console.info("Before All Outer"));
afterAll(() => console.info("After All Outer"));
beforeEach(() => console.info("Before Each Outer"));
afterEach(() => console.info("After Each Outer"));

test("Test Outer", () => console.info("Test Outer"));

describe("inner", () => {

  beforeAll(() => console.info("Before All inner"));
  afterAll(() => console.info("After All inner"));
  beforeEach(() => console.info("Before Each inner"));
  afterEach(() => console.info("After Each inner"));

  test("Test Inner", () => console.info("Test Inner"));

});