var expect = require("chai").expect;
var fs = require("fs");
var day4 = require("../day4/index");

describe("Day 4 - Giant Squid", function() {
  it("test powerConsumption - example", function() {
    const file = fs.readFileSync("./day4/input4-1.txt", "utf-8");
    const input = file.split("\n");
    const consumption = day4.calulateScoreWinningBoard(input);
    expect(consumption).to.equal(4512);
  });

  it("test powerConsumption - input", function() {
    const file = fs.readFileSync("./day4/input4-2.txt", "utf-8");
    const input = file.split("\n");
    const consumption = day4.calulateScoreWinningBoard(input);
    expect(consumption).to.equal(63552);
  });

});
