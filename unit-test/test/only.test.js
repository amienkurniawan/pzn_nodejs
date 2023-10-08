test("test 1", () => console.info("only test 1 "));
test("test 2", () => console.info("only test 2 "));
test.only("test 3", () => console.info("only test 3 "));
test("test 4", () => console.info("only test 4 "));
test("test 5", () => console.info("only test 5 "));