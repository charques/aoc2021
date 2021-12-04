var expect    = require("chai").expect;
var fs = require("fs");
var day2 = require("../day2/index");

describe("Day 2 - Dive", function() {
  it("test submarinePosition - example", function() {
    var commands = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2'];
    var position = day2.submarinePosition(commands);
    expect(position).to.equal(150);
  });

  it("test submarinePosition - input 1", function() {
    var input = fs.readFileSync("./day2/input2.txt", "utf-8");
    var commands = input.split("\n");
    var position = day2.submarinePosition(commands);
    expect(position).to.equal(1868935);
  });

  it("test submarinePositionEnriched - example", function() {
    var commands = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2'];
    var position = day2.submarinePositionEnriched(commands);
    expect(position).to.equal(900);
  });

  it("test submarinePositionEnriched - input 1", function() {
    var input = fs.readFileSync("./day2/input2.txt", "utf-8");
    var commands = input.split("\n");
    var position = day2.submarinePositionEnriched(commands);
    expect(position).to.equal(1965970888);
  });
});
