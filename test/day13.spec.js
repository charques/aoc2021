var expect = require("chai").expect;
var fs = require("fs");
var day13 = require("../day13/index");

describe("Day 13 - Transparent Origami", function() {

  it("test visibleDots - example 0a", function() {
    const file = fs.readFileSync("./day13/input13-0a.txt", "utf-8");
    const input = file.split("\n");
    const result = day13.visibleDots(input);
    expect(result).to.equal(17);
  });

  it("test visibleDots - example 0b", function() {
    const file = fs.readFileSync("./day13/input13-0b.txt", "utf-8");
    const input = file.split("\n");
    const result = day13.visibleDots(input);
    expect(result).to.equal(17);
  });

  it("test visibleDots - example 1", function() {
    const file = fs.readFileSync("./day13/input13-1.txt", "utf-8");
    const input = file.split("\n");
    const result = day13.visibleDots(input);
    expect(result).to.equal(701);
  });

  it("test visibleDotsComplete - example 0a", function() {
    const file = fs.readFileSync("./day13/input13-0a.txt", "utf-8");
    const input = file.split("\n");
    const result = day13.visibleDotsComplete(input);
    expect(result).to.equal(16);
  });

  it("test visibleDotsComplete - example 1", function() {
    const file = fs.readFileSync("./day13/input13-1.txt", "utf-8");
    const input = file.split("\n");
    const result = day13.visibleDotsComplete(input);
    expect(result).to.equal(701);
  });

});
