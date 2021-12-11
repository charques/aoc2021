var expect = require("chai").expect;
var fs = require("fs");
var day11 = require("../day11/index");

describe("Day 11 - Dumbo Octopus", function() {

  it("test calcFlashes - example 0b", function() {
    const file = fs.readFileSync("./day11/input11-0b.txt", "utf-8");
    const input = file.split("\n");
    const result = day11.calcFlashes(input, 2);
    expect(result.numFlashes).to.equal(9);
  });

  it("test calcFlashes - example 0", function() {
    const file = fs.readFileSync("./day11/input11-0.txt", "utf-8");
    const input = file.split("\n");
    const result = day11.calcFlashes(input, 2);
    expect(result.numFlashes).to.equal(35);
  });

  it("test calcFlashes - example 0", function() {
    const file = fs.readFileSync("./day11/input11-0.txt", "utf-8");
    const input = file.split("\n");
    const result = day11.calcFlashes(input, 3);
    expect(result.numFlashes).to.equal(80);
  });

  it("test calcFlashes - example 0", function() {
    const file = fs.readFileSync("./day11/input11-0.txt", "utf-8");
    const input = file.split("\n");
    const result = day11.calcFlashes(input, 10);
    expect(result.numFlashes).to.equal(204);
  });

  it("test calcFlashes - example 0", function() {
    const file = fs.readFileSync("./day11/input11-0.txt", "utf-8");
    const input = file.split("\n");
    const result = day11.calcFlashes(input, 100);
    expect(result.numFlashes).to.equal(1656);
  });

  it("test calcFlashes - example 1", function() {
    const file = fs.readFileSync("./day11/input11-1.txt", "utf-8");
    const input = file.split("\n");
    const result = day11.calcFlashes(input, 100);
    expect(result.numFlashes).to.equal(1627);
  });

  it("test calcFirstSync - example 0", function() {
    const file = fs.readFileSync("./day11/input11-0.txt", "utf-8");
    const input = file.split("\n");
    const result = day11.calcFlashes(input, 200);
    expect(result.firstSync).to.equal(195);
  });

  it("test calcFirstSync - example 1", function() {
    const file = fs.readFileSync("./day11/input11-1.txt", "utf-8");
    const input = file.split("\n");
    const result = day11.calcFlashes(input, 400);
    expect(result.firstSync).to.equal(329);
  });

});
