var expect = require("chai").expect;
var fs = require("fs");
var day9 = require("../day9/index");

describe("Day 9 - Smoke Basin", function() {

  it("test lowPointsRiskLevels - example 0", function() {
    const file = fs.readFileSync("./day9/input9-0.txt", "utf-8");
    const input = file.split("\n");
    const score = day9.lowPointsRiskLevels(input);
    expect(score).to.equal(15);
  });

  it("test lowPointsRiskLevels - input 1", function() {
    const file = fs.readFileSync("./day9/input9-1.txt", "utf-8");
    const input = file.split("\n");
    const score = day9.lowPointsRiskLevels(input);
    expect(score).to.equal(504);
  });

  it("test lowPointsRiskLevelsAdvanced - example 0", function() {
    const file = fs.readFileSync("./day9/input9-0.txt", "utf-8");
    const input = file.split("\n");
    const score = day9.lowPointsRiskLevelsAdvanced(input);
    expect(score).to.equal(1134);
  });

  it("test lowPointsRiskLevelsAdvanced - input 1", function() {
    const file = fs.readFileSync("./day9/input9-1.txt", "utf-8");
    const input = file.split("\n");
    const score = day9.lowPointsRiskLevelsAdvanced(input);
    expect(score).to.equal(1558722);
  });

});
