var expect = require("chai").expect;
var fs = require("fs");
var day5 = require("../day5/index");

describe("Day 5 - Hydrothermal Venture", function() {
  it("test calulateOverlaps - example", function() {
    const file = fs.readFileSync("./day5/input5-1.txt", "utf-8");
    const input = file.split("\n");
    const score = day5.calulateOverlaps(input);
    expect(score).to.equal(5);
  });

  it("test calulateOverlaps - input", function() {
    const file = fs.readFileSync("./day5/input5-2.txt", "utf-8");
    const input = file.split("\n");
    const score = day5.calulateOverlaps(input);
    expect(score).to.equal(5774);
  });

  /*it("test calulateScoreWinningBoardLastWin - example", function() {
    const file = fs.readFileSync("./day5/input5-1.txt", "utf-8");
    const input = file.split("\n");
    const score = day5.calulateScoreWinningBoardLastWin(input);
    expect(score).to.equal(1924);
  });

  it("test calulateScoreWinningBoardLastWin - input", function() {
    const file = fs.readFileSync("./day5/input5-2.txt", "utf-8");
    const input = file.split("\n");
    const score = day5.calulateScoreWinningBoardLastWin(input);
    expect(score).to.equal(9020);
  });*/

});
