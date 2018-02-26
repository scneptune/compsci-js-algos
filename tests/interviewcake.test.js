

const chai = require('chai');
const expect = chai.expect;

function mergeRanges(meetingRange) {
  return meetingRange;  
}

describe('Merging Ranges Problem', function (){
  it('given a expected set return a valid range', function (){
    const testRanges = [
      { startTime: 0, endTime: 1 },
      { startTime: 3, endTime: 5 },
      { startTime: 4, endTime: 8 },
      { startTime: 10, endTime: 12 },
      { startTime: 9, endTime: 10 }
    ]

    const expectedRanges = [
      { startTime: 0, endTime: 1 },
      { startTime: 3, endTime: 8 },
      { startTime: 9, endTime: 12 }
    ]
 
    expect(mergeRanges(testRanges)).to.be.deep.eql(expectedRanges);
  })
})

