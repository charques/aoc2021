var expect    = require("chai").expect;
var fs = require("fs");
var day3 = require("../day3/index");

describe("Day 3 - Binary Diagnostic", function() {
  it("test powerConsumption - example", function() {
    var input = fs.readFileSync("./day3/input3-1.txt", "utf-8");
    var input = input.split("\n");
    var consumption = day3.powerConsumption(input);
    expect(consumption).to.equal(198);
  });

  it("test powerConsumption - input", function() {
    var input = fs.readFileSync("./day3/input3-2.txt", "utf-8");
    var input = input.split("\n");
    var consumption = day3.powerConsumption(input);
    expect(consumption).to.equal(4001724);
  });
});
