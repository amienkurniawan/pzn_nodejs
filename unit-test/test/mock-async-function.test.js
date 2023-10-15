import { getBalance } from "../src/async";

test("mock async function", async () => {
  const from = jest.fn();
  const cashFrom = jest.fn();
  from.mockResolvedValueOnce(1000);
  cashFrom.mockResolvedValueOnce(10000);

  await expect(getBalance("eko", from, cashFrom)).resolves.toEqual({
    name: "eko",
    balance: 1000,
    cash: 10000
  })

  expect(from.mock.calls.length).toBe(1);
  await expect(from.mock.results[0].value).resolves.toBe(1000);

  expect(cashFrom.mock.calls.length).toBe(1);
  await expect(cashFrom.mock.results[0].value).resolves.toBe(10000);

});

test.failing("mock async function rejected", async () => {
  const from = jest.fn();
  from.mockRejectedValueOnce(new Error("ups"));

  await getBalance("amien", from);
});

test("mock async function error matchers", async () => {
  const from = jest.fn();
  from.mockRejectedValueOnce("Rejected");

  await expect(getBalance("amien", from)).rejects.toBe("Rejected");
});