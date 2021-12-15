var expect = require("chai").expect;
var fs = require("fs");
var day14 = require("../day14/index");

describe("Day 14 - Extended Polymerization", function() {

  it("test calc - example 0a", function() {
    const file = fs.readFileSync("./day14/input14-0a.txt", "utf-8");
    const input = file.split("\n");
    const result = day14.calc(input, 10);
    expect(result).to.equal(1588);
  });

  it("test calc - example 1", function() {
    const file = fs.readFileSync("./day14/input14-1.txt", "utf-8");
    const input = file.split("\n");
    const result = day14.calc(input, 10);
    expect(result).to.equal(3906);
  });

  it("test calc - example 0a", function() {
    const file = fs.readFileSync("./day14/input14-0a.txt", "utf-8");
    const input = file.split("\n");
    const result = day14.calc2(input, 10);
    expect(result).to.equal(1588);
  });

  it("test calc - example 1", function() {
    const file = fs.readFileSync("./day14/input14-1.txt", "utf-8");
    const input = file.split("\n");
    const result = day14.calc2(input, 40);
    expect(result).to.equal(4441317262452);
  });

});
