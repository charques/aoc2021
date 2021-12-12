var expect = require("chai").expect;
var fs = require("fs");
var day12 = require("../day12/index");

describe("Day 12 - Passage Pathing", function() {

  it("test calcPaths - example 0a", function() {
    const file = fs.readFileSync("./day12/input12-0a.txt", "utf-8");
    const input = file.split("\n");
    const result = day12.calcPaths(input, false);
    expect(result).to.equal(10);
  });

  it("test calcPaths - example 0b", function() {
    const file = fs.readFileSync("./day12/input12-0b.txt", "utf-8");
    const input = file.split("\n");
    const result = day12.calcPaths(input, false);
    expect(result).to.equal(19);
  });

  it("test calcPaths - example 0c", function() {
    const file = fs.readFileSync("./day12/input12-0c.txt", "utf-8");
    const input = file.split("\n");
    const result = day12.calcPaths(input, false);
    expect(result).to.equal(226);
  });

  it("test calcPaths - example 1", function() {
    const file = fs.readFileSync("./day12/input12-1.txt", "utf-8");
    const input = file.split("\n");
    const result = day12.calcPaths(input, false);
    expect(result).to.equal(3421);
  });

  it("test calcPaths - allow twice - example 0a", function() {
    const file = fs.readFileSync("./day12/input12-0a.txt", "utf-8");
    const input = file.split("\n");
    const result = day12.calcPaths(input, true);
    expect(result).to.equal(36);
  });

  it("test calcPaths - allow twice - example 0b", function() {
    const file = fs.readFileSync("./day12/input12-0b.txt", "utf-8");
    const input = file.split("\n");
    const result = day12.calcPaths(input, true);
    expect(result).to.equal(103);
  });

  it("test calcPaths - allow twice - example 0c", function() {
    const file = fs.readFileSync("./day12/input12-0c.txt", "utf-8");
    const input = file.split("\n");
    const result = day12.calcPaths(input, true);
    expect(result).to.equal(3509);
  });

  it("test calcPaths - allow twice - example 1", function() {
    const file = fs.readFileSync("./day12/input12-1.txt", "utf-8");
    const input = file.split("\n");
    const result = day12.calcPaths(input, true);
    expect(result).to.equal(84870);
  });

});
