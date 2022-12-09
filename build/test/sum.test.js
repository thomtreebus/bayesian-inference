"use strict";
const sumFunc = require("../src/sum");
test("adds 1 + 2 to equal 3", () => {
    expect(sumFunc(1, 2)).toBe(3);
});
