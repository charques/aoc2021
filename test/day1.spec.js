var expect    = require("chai").expect;
var fs = require("fs");
var day1 = require("../day1/index");

describe("Day 1 - Sonar Sweep", function() {
  it("test sonarSimpleIncrements - example", function() {
    const report = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
    const increments = day1.sonarSimpleIncrements(report);
    expect(increments).to.equal(7);
  });

  it("test sonarSimpleIncrements - input 1", function() {
    const file = fs.readFileSync("./day1/input1.txt", "utf-8");
    const inputArray = file.split("\n").map(Number);
    const increments = day1.sonarSimpleIncrements(inputArray);
    expect(increments).to.equal(1477);
  });

  it("test sonarSlidingIncrements - example", function() {
    const report = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
    const increments = day1.sonarSlidingIncrements(report);
    expect(increments).to.equal(5);
  });

  it("test sonarSlidingIncrements - input 1", function() {
    const file = fs.readFileSync("./day1/input1.txt", "utf-8");
    const inputArray = file.split("\n").map(Number);
    const increments = day1.sonarSlidingIncrements(inputArray);
    expect(increments).to.equal(1523);
  });
});
