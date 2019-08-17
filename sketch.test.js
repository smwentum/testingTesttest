const funcs = require("./sketch");

test("adds 1 + 2 to equal 3", () => {
  expect(funcs.sum(1, 2)).toBe(3);
});

test("adds 2 + 2 to equal 4", () => {
  expect(funcs.sum(2, 2)).toBe(4);
});

test("difference 2 -1 to equal 1", () => {
  expect(funcs.difference(2, 1)).toBe(1);
});

test("difference 1 -2 to equal -1", () => {
  expect(funcs.difference(1, 2)).toBe(-1);
});

test("13 squared is 169", () => {
    expect(funcs.square).toBe(169);
});

