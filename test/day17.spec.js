var expect = require("chai").expect;
var fs = require("fs");
var day17 = require("../day17/index");

describe("Day 17: Trick Shot", function() {

  it("test highestY - example 0", function() {
    const result = day17.highestY(20, 30, -5, -10);
    expect(result).to.equal(45);
  });

  /*it("test highestY - example 1", function() {
    const result = day17.highestY(282, 314, -45, -80);
    expect(result).to.equal(3160);
  });

  it("test highestY - example 0", function() {
    const result = day17.numHits(20, 30, -5, -10);
    expect(result).to.equal(112);
  });

  it("test highestY - example 0", function() {
    const result = day17.numHits(282, 314, -45, -80);
    expect(result).to.equal(1928);
  });*/
});
