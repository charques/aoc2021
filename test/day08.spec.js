var expect = require("chai").expect;
var fs = require("fs");
var day8 = require("../day8/index");

describe("Day 08 - Seven Segment Search", function() {

  it("test countTimesDigit - example 0", function() {
    const file = fs.readFileSync("./day8/input8-base.txt", "utf-8");
    const input = file.split("\n");
    const score = day8.countTimesDigit1(input, [1,4,7,8]);
    expect(score).to.equal(0);
  });

  it("test countTimesDigit - example 1", function() {
    const file = fs.readFileSync("./day8/input8-0.txt", "utf-8");
    const input = file.split("\n");
    const score = day8.countTimesDigit1(input, [1,4,7,8]);
    expect(score).to.equal(26);
  });

  it("test countTimesDigit2 - input 0", function() {
    const file = fs.readFileSync("./day8/input8-0.txt", "utf-8");
    const input = file.split("\n");
    const score = day8.countTimesDigit2(input);
    expect(score).to.equal(61229);
  });

  it("test countTimesDigit2 - input 1", function() {
    const file = fs.readFileSync("./day8/input8-1.txt", "utf-8");
    const input = file.split("\n");
    const score = day8.countTimesDigit2(input);
    expect(score).to.equal(1028926);
  });

});
