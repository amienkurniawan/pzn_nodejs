beforeAll(() => console.info("Before All Outer"));
beforeEach(() => console.info("Before Each Outer"));

test("Test Outer", () => console.info("Test Outer"));
afterEach(() => console.info("After Each Outer"));

describe("inner", () => {

  beforeAll(() => console.info("Before All inner"));
  beforeEach(() => console.info("Before Each inner"));

  afterAll(() => console.info("After All inner"));

  test("Test Inner", () => console.info("Test Inner"));

  afterEach(() => console.info("After Each inner"));

});


afterAll(() => console.info("After All Outer"));
