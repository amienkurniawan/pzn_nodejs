test("test 1", () => console.info("skip test 1 "));
test("test 2", () => console.info("skip test 2 "));
test.skip("test 3", () => console.info("skip test 3 "));
test("test 4", () => console.info("skip test 4 "));
test("test 5", () => console.info("skip test 5 "));