var expect = require("chai").expect;
var fs = require("fs");
var day6 = require("../day6/index");

describe("Day 6 - Lanternfish", function() {
  it("test calcLanternfish - example1", function() {
    const input = fs.readFileSync("./day6/input6-0.txt", "utf-8");
    //const input = file.split("\n");
    const score = day6.calcLanternfish(input, 18);
    expect(score).to.equal(26);
  });

  it("test calcLanternfish - example2", function() {
    const input = fs.readFileSync("./day6/input6-0.txt", "utf-8");
    //const input = file.split("\n");
    const score = day6.calcLanternfish(input, 80);
    expect(score).to.equal(5934);
  });

  it("test calcLanternfish - example2", function() {
    const input = fs.readFileSync("./day6/input6-1.txt", "utf-8");
    //const input = file.split("\n");
    const score = day6.calcLanternfish(input, 80);
    expect(score).to.equal(355386);
  });

  it("test calcLanternfish - example3", function() {
    const input = fs.readFileSync("./day6/input6-0.txt", "utf-8");
    //const input = file.split("\n");
    const score = day6.calcLanternfish(input, 256);
    expect(score).to.equal(26984457539);
  });

});
