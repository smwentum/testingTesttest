const funcs = require("./sketch");

test("adds 1 + 2 to equal 3", () => {
  expect(funcs.sum(1, 2)).toBe(3);
});

test("adds 2 -1 to equal 1", () => {
  expect(funcs.difference(2, 1)).toBe(1);
});
