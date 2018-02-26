

const chai = require('chai');
const expect = chai.expect;

function mergeRanges(meetingRange) {
  //FORMAL RULES:
  //1. first startTime is "currentMtg"
  //2. other startTime is "firstMtg"
  //3. if (currentMtg.startTime <= nextMtg.endTime) merge the two
  // into one time range. resulting time startTime is first meetingsStart 
  // and endTime is the later of the two meetings endTime's
  // 4. else leave them as seperate records

  //  O( n log n ) time
  let sortedMeetings = meetingRange.slice().sort(
    (a, b) => ((a.startTime > b.startTime) ? 1 : -1)
  );
  console.info(sortedMeetings, 'sortedMeetings arr');
  let resultingMtgRange = [sortedMeetings[0]];

  // O ( n ) time
  for (var iter = 0, mtgLen = sortedMeetings.length; iter < mtgLen; iter++ ) {
    let currentMtg = meetingRange[iter];
    let nextMtg = resultingMtgRange[(resultingMtgRange.length - 1)];
    // if currentMtg overlaps the nextMtg then set the new values on the nextMtg;
    if (currentMtg.startTime <= nextMtg.endTime) {
      nextMtg.startTime = Math.min(currentMtg.startTime, nextMtg.startTime);
      nextMtg.endTime = Math.max(nextMtg.endTime, currentMtg.endTime)
    } else {
      resultingMtgRange.push(currentMtg);
    }

  }
  console.info(`given a expected set return a valid range`, resultingMtgRange );
  return resultingMtgRange;  
}

describe('Merging Ranges Problem', function (){
  it('given a reduced set return a valid range', function (){
    const testRanges = [
      { startTime: 1, endTime: 3 },
      { startTime: 2, endTime: 4 },
    ]

    const expectedRanges = [
      { startTime: 1, endTime: 4 }
    ]
    expect(mergeRanges(testRanges)).to.be.deep.eql(expectedRanges);
  })

  it('given a reduced set return a valid range (same endTimes and startTimes)', function (){
    const testRanges = [
      { startTime: 1, endTime: 2 },
      { startTime: 2, endTime: 3 },
    ]

    const expectedRanges = [
      { startTime: 1, endTime: 3 }
    ]
    expect(mergeRanges(testRanges)).to.be.deep.eql(expectedRanges);
  })
  
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

