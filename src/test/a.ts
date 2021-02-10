import add from "../demo";

const mocha = require("mocha");

const { describe, it } = mocha;
const assert = require("assert");

describe("test demo", () => {
  it("add function", () => {
    assert.equal(2, add(1, 1));
  });
});
