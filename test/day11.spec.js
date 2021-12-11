var expect = require("chai").expect;
var fs = require("fs");
var day11 = require("../day11/index");

describe("Day 11 - Dumbo Octopus", function() {

  it("test calcFlashes - example 0b", function() {
    const file = fs.readFileSync("./day11/input11-0b.txt", "utf-8");
    const input = file.split("\n");
    const score = day11.calcFlashes(input, 2);
    expect(score).to.equal(9);
  });

  it("test calcFlashes - example 0", function() {
    const file = fs.readFileSync("./day11/input11-0.txt", "utf-8");
    const input = file.split("\n");
    const score = day11.calcFlashes(input, 2);
    expect(score).to.equal(35);
  });

  it("test calcFlashes - example 0", function() {
    const file = fs.readFileSync("./day11/input11-0.txt", "utf-8");
    const input = file.split("\n");
    const score = day11.calcFlashes(input, 3);
    expect(score).to.equal(35);
  });

  /*it("test calcFlashes - example 0", function() {
    const file = fs.readFileSync("./day11/input11-0.txt", "utf-8");
    const input = file.split("\n");
    const score = day11.calcFlashes(input, 10);
    expect(score).to.equal(204);
  });

  it("test calcFlashes - example 0", function() {
    const file = fs.readFileSync("./day11/input11-0.txt", "utf-8");
    const input = file.split("\n");
    const score = day11.calcFlashes(input, 100);
    expect(score).to.equal(1656);
  });*/

});
