var expect = require("chai").expect;
var fs = require("fs");
var day5 = require("../day5/index");

describe("Day 5 - Hydrothermal Venture", function() {
  it("test calulateOverlapsSimple - example", function() {
    const file = fs.readFileSync("./day5/input5-1.txt", "utf-8");
    const input = file.split("\n");
    const score = day5.calulateOverlaps(input, false);
    expect(score).to.equal(5);
  });

  it("test calulateOverlapsSimple - input", function() {
    const file = fs.readFileSync("./day5/input5-2.txt", "utf-8");
    const input = file.split("\n");
    const score = day5.calulateOverlaps(input, false);
    expect(score).to.equal(5774);
  });

  it("test calulateOverlapsComplex - example", function() {
    const file = fs.readFileSync("./day5/input5-1.txt", "utf-8");
    const input = file.split("\n");
    const score = day5.calulateOverlaps(input, true);
    expect(score).to.equal(12);
  });

  it("test calulateOverlapsComplex - input", function() {
    const file = fs.readFileSync("./day5/input5-2.txt", "utf-8");
    const input = file.split("\n");
    const score = day5.calulateOverlaps(input, true);
    expect(score).to.equal(18423);
  });

});
