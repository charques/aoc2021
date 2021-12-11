var expect = require("chai").expect;
var fs = require("fs");
var day6Recursive = require("../day6/index-recursive");
var day6Better = require("../day6/index-better");

describe("Day 06 - Lanternfish", function() {

  it("test calcLanternfish RECURSIVE - 18 - example1", function() {
    const input = fs.readFileSync("./day6/input6-0.txt", "utf-8");
    const score = day6Recursive.calcLanternfish(input, 18);
    expect(score).to.equal(26);
  });

  it("test calcLanternfish RECURSIVE - 80 - example2", function() {
    const input = fs.readFileSync("./day6/input6-0.txt", "utf-8");
    const score = day6Recursive.calcLanternfish(input, 80);
    expect(score).to.equal(5934);
  });

  it("test calcLanternfish RECURSIVE - 80 - input1", function() {
    const input = fs.readFileSync("./day6/input6-1.txt", "utf-8");
    const score = day6Recursive.calcLanternfish(input, 80);
    expect(score).to.equal(355386);
  });

  //---------------------------------------------------------------

  it("test calcLanternfish - 18 - example1", function() {
    const input = fs.readFileSync("./day6/input6-0.txt", "utf-8");
    const score = day6Better.simulateDays(input, 18);
    expect(score).to.equal(26);
  });

  it("test calcLanternfish - 80 - example2", function() {
    const input = fs.readFileSync("./day6/input6-0.txt", "utf-8");
    const score = day6Better.simulateDays(input, 80);
    expect(score).to.equal(5934);
  });

  it("test calcLanternfish - 80 - input1", function() {
    const input = fs.readFileSync("./day6/input6-1.txt", "utf-8");
    const score = day6Better.simulateDays(input, 80);
    expect(score).to.equal(355386);
  });

  it("test calcLanternfish - 256 - example1", function() {
    const input = fs.readFileSync("./day6/input6-0.txt", "utf-8");
    const score = day6Better.simulateDays(input, 256);
    expect(score).to.equal(26984457539);
  });

  it("test calcLanternfish - 256 - input1", function() {
    const input = fs.readFileSync("./day6/input6-1.txt", "utf-8");
    const score = day6Better.simulateDays(input, 256);
    expect(score).to.equal(1613415325809);
  });

});
