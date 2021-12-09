var expect = require("chai").expect;
var fs = require("fs");
var day10 = require("../day10/index");

describe("Day 10 - Smoke Basin", function() {

  it("test testFunction - example 0", function() {
    const file = fs.readFileSync("./day9/input9-0.txt", "utf-8");
    const input = file.split("\n");
    const score = day10.testFunction(input);
    expect(score).to.equal(0);
  });

});
