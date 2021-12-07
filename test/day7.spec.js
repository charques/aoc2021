var expect = require("chai").expect;
var fs = require("fs");
var day7 = require("../day7/index");

describe("Day 7 - The Treachery of Whales", function() {

  /*it("test calcFuel - example1", function() {
    const input = fs.readFileSync("./day7/input7-0.txt", "utf-8");
    const score = day7.calcFuel(input, false);
    expect(score).to.equal(37);
  });

  it("test calcFuel - input1", function() {
    const input = fs.readFileSync("./day7/input7-1.txt", "utf-8");
    const score = day7.calcFuel(input, false);
    expect(score).to.equal(354129);
  });*/

  it("test calcFuel - example1", function() {
    const input = fs.readFileSync("./day7/input7-0.txt", "utf-8");
    const score = day7.calcFuel(input, true);
    expect(score).to.equal(168);
  });

  /*it("test calcFuel - example1", function() {
    const input = fs.readFileSync("./day7/input7-0.txt", "utf-8");
    const score = day7.sumatorio(0);
    const score2 = day7.sumatorio(5);
    expect(score).to.equal(0);
    expect(score2).to.equal(10);
  });*/


});
