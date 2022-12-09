const sumFunc = require("../src/sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sumFunc(1, 2)).toBe(3);
});

test("adds 2 + 2 to equal 4", () => {
  expect(sumFunc(2, 2)).toBe(4);
});
