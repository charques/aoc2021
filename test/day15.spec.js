var expect = require("chai").expect;
var fs = require("fs");
var day15 = require("../day15/index");

describe("Day 15: Chiton", function() {

  /*it("test lowestTotalRisk - example 0", function() {
    const file = fs.readFileSync("./day15/input15-0a.txt", "utf-8");
    const input = file.split("\n");
    const result = day15.lowestTotalRisk(input);
    expect(result).to.equal(17);
  });

  it("test lowestTotalRisk - example 0", function() {
    const file = fs.readFileSync("./day15/input15-0.txt", "utf-8");
    const input = file.split("\n");
    const result = day15.lowestTotalRisk(input);
    expect(result).to.equal(40);
  });*/

  /*it("test lowestTotalRisk - example 1", function() {
    const file = fs.readFileSync("./day15/input15-1.txt", "utf-8");
    const input = file.split("\n");
    const result = day15.lowestTotalRisk(input);
    expect(result).to.equal(40);
  });*/

  it("test lowestTotalRisk - example 0", function() {
    const file = fs.readFileSync("./day15/input15-0a.txt", "utf-8");
    const input = file.split("\n");
    const result = day15.lowestTotalRisk2(input);
    expect(result).to.equal(17);
  });

  it("test lowestTotalRisk - example 0", function() {
    const file = fs.readFileSync("./day15/input15-0.txt", "utf-8");
    const input = file.split("\n");
    const result = day15.lowestTotalRisk2(input);
    expect(result).to.equal(40);
  });

  it("test lowestTotalRisk - example 1", function() {
    const file = fs.readFileSync("./day15/input15-1.txt", "utf-8");
    const input = file.split("\n");
    const result = day15.lowestTotalRisk2(input);
    expect(result).to.equal(40);
  });

});
