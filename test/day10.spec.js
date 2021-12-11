var expect = require("chai").expect;
var fs = require("fs");
var day10 = require("../day10/index");

describe("Day 10 - Syntax Scoring", function() {

  it("test findFirstIlegalCharacter - example 0", function() {
    const file = fs.readFileSync("./day10/input10-0.txt", "utf-8");
    const input = file.split("\n");
    const score = day10.findFirstIlegalCharacter(input);
    expect(score).to.equal(26397);
  });

  it("test findFirstIlegalCharacter - input 1", function() {
    const file = fs.readFileSync("./day10/input10-1.txt", "utf-8");
    const input = file.split("\n");
    const score = day10.findFirstIlegalCharacter(input);
    expect(score).to.equal(266301);
  });

  it("test calcMiddleScoreCompletionStrings - example 0", function() {
    const file = fs.readFileSync("./day10/input10-0.txt", "utf-8");
    const input = file.split("\n");
    const score = day10.calcMiddleScoreCompletionStrings(input);
    expect(score).to.equal(288957);
  });

  it("test calcMiddleScoreCompletionStrings - example 1", function() {
    const file = fs.readFileSync("./day10/input10-1.txt", "utf-8");
    const input = file.split("\n");
    const score = day10.calcMiddleScoreCompletionStrings(input);
    expect(score).to.equal(3404870164);
  });

});
