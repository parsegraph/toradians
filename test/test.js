var assert = require("assert");
import todo from "../dist/toradians";

describe("Package", function () {
  it("works", ()=>{
    assert.equal(todo(), 42);
  });
});
