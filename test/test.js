import { assert } from "chai";
import fuzzyEquals from "parsegraph-fuzzyequals";
import { toRadians, toDegrees } from "../src/index";

describe("toDegrees", function () {
  it("works", () => {
    assert.equal(toDegrees(2 * Math.PI), 360);
    assert.equal(toDegrees(0), 0);
    assert.equal(toDegrees(Math.PI), 180);
  });
  it("reverses toRadians", () => {
    for (var i = 0; i < 360; ++i) {
      assert.ok(fuzzyEquals(i, toDegrees(toRadians(i))));
    }
  });
});

describe("toRadians", function () {
  it("works", () => {
    assert.equal(toRadians(360), Math.PI * 2);
    assert.equal(toRadians(0), 0);
    assert.equal(toRadians(180), Math.PI);
  });
  it("reverses toDegrees", () => {
    for (var i = 0; i < 360; ++i) {
      assert.ok(fuzzyEquals(i, toRadians(toDegrees(i))));
    }
  });
});
