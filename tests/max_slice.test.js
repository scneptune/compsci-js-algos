const chai = require('chai');
const expect = chai.expect;

function maxSlice(targetArr) {
  let bestStart = 0;
  let bestEnd = -1;
  let bestSum = -Infinity;
  let currentSum = 0;
  let currentStart = 0;
  let targetArrLen = targetArr.length + 1;

  for (let iter = 0; iter < targetArrLen; iter++) {
    if (currentSum < 0) {
      currentStart = targetArr[iter];
      currentSum = 0;
    }
    currentSum = targetArr[iter] + currentSum;
    if (currentSum > bestSum) {
      bestSum = currentSum;
      bestStart = currentStart;
      bestEnd = iter;
    }
  }

  let finalArr = targetArr.slice(bestStart, bestEnd);
  return finalArr;
}

describe("maxSlice", function () {
  // it('returns an empty slice when given an empty array', function () {
  //   expect(maxSlice([])).to.be.deep.eql([]);
  // })
  // it("returns a slice of one if given an entirely negative array", function () {
  //   expect(maxSlice([-1, -2, -3])).to.be.deep.eql([-1])
  // })
  // it("returns the entire array if that is the largest slice", function () {
  //   expect(maxSlice([1,2,3,4])).to.be.deep.eql([1,2,3,4])
  // })
  // it("will slice off the first or last element appropriately", function () {
  //   expect(maxSlice([-10000,2,3,4])).to.be.deep.eql([2,3,4])
  //   expect(maxSlice([2,3,4,-10000])).to.be.deep.eql([2,3,4])
  // })
  // it("will return the shortest slice it can", function () {
  //   expect(maxSlice([10,20,-5,2,3])).to.be.deep.eql([10,20])
  // })
  // it("will not succumb to local minima", function () {
  //   expect(maxSlice([10,20,-5,2,3,1,-10])).to.be.deep.eql([10,20,-5,2,3,1])
  // })
})
