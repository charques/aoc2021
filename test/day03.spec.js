var expect = require("chai").expect;
var fs = require("fs");
var day3 = require("../day3/index");

describe("Day 03 - Binary Diagnostic", function() {
  it("test powerConsumption - example", function() {
    const file = fs.readFileSync("./day3/input3-1.txt", "utf-8");
    const input = file.split("\n");
    const consumption = day3.powerConsumption(input);
    expect(consumption).to.equal(198);
  });

  it("test powerConsumption - input", function() {
    const file = fs.readFileSync("./day3/input3-2.txt", "utf-8");
    const input = file.split("\n");
    const consumption = day3.powerConsumption(input);
    expect(consumption).to.equal(4001724);
  });

  it("test lifeSupportRating - example", function() {
    const file = fs.readFileSync("./day3/input3-1.txt", "utf-8");
    const input = file.split("\n");
    const consumption = day3.lifeSupportRating(input);
    expect(consumption).to.equal(230);
  });

  it("test lifeSupportRating - input", function() {
    const file = fs.readFileSync("./day3/input3-2.txt", "utf-8");
    const input = file.split("\n");
    const consumption = day3.lifeSupportRating(input);
    expect(consumption).to.equal(587895);
  });
});
