const chai = require('chai');
chai.config.includeStack = true
const expect = chai.expect;

// ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const DayOfTheWeek = [0,1,2,3,4,5,6];

function findDayOfTheWeek(dayNum, ) {
    let currDayNum = parseInt(dayNum);
    if (isNaN(currDayNum)) {
        throw new TypeError("Not A Number");
    } 
}

describe("find the day of the week given a number", function() {
    it("if day of the week is not an integer, barf", function() {
        expect(function () { findDayOfTheWeek("farts"); }).to.throw();
    });
})