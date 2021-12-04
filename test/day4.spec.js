var expect = require("chai").expect;
var fs = require("fs");
var day4 = require("../day4/index");

describe("Day 4 - Giant Squid", function() {
  it("test calulateScoreWinningBoardFirstWin - example", function() {
    const file = fs.readFileSync("./day4/input4-1.txt", "utf-8");
    const input = file.split("\n");
    const score = day4.calulateScoreWinningBoardFirstWin(input);
    expect(score).to.equal(4512);
  });

  it("test calulateScoreWinningBoardFirstWin - input", function() {
    const file = fs.readFileSync("./day4/input4-2.txt", "utf-8");
    const input = file.split("\n");
    const score = day4.calulateScoreWinningBoardFirstWin(input);
    expect(score).to.equal(63552);
  });

  it("test calulateScoreWinningBoardLastWin - example", function() {
    const file = fs.readFileSync("./day4/input4-1.txt", "utf-8");
    const input = file.split("\n");
    const score = day4.calulateScoreWinningBoardLastWin(input);
    expect(score).to.equal(1924);
  });

  it("test calulateScoreWinningBoardLastWin - input", function() {
    const file = fs.readFileSync("./day4/input4-2.txt", "utf-8");
    const input = file.split("\n");
    const score = day4.calulateScoreWinningBoardLastWin(input);
    expect(score).to.equal(9020);
  });

});
