var expect = require("chai").expect;
var fs = require("fs");
var day17 = require("../day17/index");

describe("Day 17: Trick Shot", function() {

  it("test highestY - example 0", function() {
    const file = fs.readFileSync("./day17/input17-0.txt", "utf-8");
    const input = file.split("\n");
    const result = day17.highestY(20, 30, -5, -10, 100);
    expect(result).to.equal(45);
  });

  it("test highestY - example 1", function() {
    const file = fs.readFileSync("./day17/input17-0.txt", "utf-8");
    const input = file.split("\n");
    const result = day17.highestY(282, 314, -45, -80, 200);
    expect(result).to.equal(3160);
  });
});
