var expect = require("chai").expect;
var fs = require("fs");
var day15 = require("../day15/index");

describe("Day 15: Chiton", function() {

  it("test calcRiskLevel - example 0a", function() {
    const file = fs.readFileSync("./day15/input15-0a.txt", "utf-8");
    const input = file.split("\n");
    const result = day15.calcRiskLevel(input);
    expect(result).to.equal(17);
  });

  it("test calcRiskLevel - example 0", function() {
    const file = fs.readFileSync("./day15/input15-0.txt", "utf-8");
    const input = file.split("\n");
    const result = day15.calcRiskLevel(input);
    expect(result).to.equal(40);
  });

  it("test calcRiskLevel - example 1", function() {
    const file = fs.readFileSync("./day15/input15-1.txt", "utf-8");
    const input = file.split("\n");
    const result = day15.calcRiskLevel(input);
    expect(result).to.equal(673);
  });

  it("test calcRiskLevel2 - example 0a", function() {
    const file = fs.readFileSync("./day15/input15-0a.txt", "utf-8");
    const input = file.split("\n");
    const result = day15.calcRiskLevel2(input);
    expect(result).to.equal(134);
  });

  it("test calcRiskLevel2 - example 0b", function() {
    const file = fs.readFileSync("./day15/input15-0b.txt", "utf-8");
    const input = file.split("\n");
    const result = day15.calcRiskLevel2(input);
    expect(result).to.equal(83);
  });

  it("test calcRiskLevel2 - example 0a", function() {
    const file = fs.readFileSync("./day15/input15-0.txt", "utf-8");
    const input = file.split("\n");
    const result = day15.calcRiskLevel2(input);
    expect(result).to.equal(315);
  });

  it("test calcRiskLevel2 - example 1", function() {
    const file = fs.readFileSync("./day15/input15-1.txt", "utf-8");
    const input = file.split("\n");
    const result = day15.calcRiskLevel2(input);
    expect(result).to.equal(2908);
  });

});
