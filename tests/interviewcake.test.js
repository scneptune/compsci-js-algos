
const chai = require('chai');
const expect = chai.expect;

function mergeRanges(meetingRange) {
  if (!Array.isArray(meetingRange)) {
    throw new TypeError("Invalid Format")
  } 
  meetingRange = meetingRange.sort(function (a, b) {
    return ((a.startTime > b.startTime) ? 1 : -1)
  });
  //FORMAL RULES:
  //1. first startTime is "currentMtg"
  //2. other startTime is "nextMtg"
  //3. if (currentMtg.startTime <= nextMtg.endTime) merge the two
  // into one time range. resulting time startTime is first meetingsStart 
  // and endTime is the later of the two meetings endTime's
  // 4. else leave them as seperate records
  let finalRange = [meetingRange[0]];

  for (let iter = 1, rangeLen = meetingRange.length; iter < rangeLen; iter++) {
    let nextMtg = meetingRange[iter];
    let currentMtg = finalRange[finalRange.length - 1];
    if (nextMtg.startTime <= currentMtg.endTime) {
      currentMtg.endTime = Math.max(currentMtg.endTime, nextMtg.endTime)
    } else {
      finalRange.push(nextMtg);
    }
  } 
  return finalRange;

}

describe('Merging Ranges Problem', function (){
  it("Given the wrong set of params the function will throw an error",function() {
    expect(function () {
      mergeRanges("dsfasdfas")
    }).to.throw("Invalid Format");
  })
  it("Given a set of ranges, We can greedily pair down availiblity schedules", function(){
    const problemRanges = [{
        startTime: 0,
        endTime: 1
      },
      {
        startTime: 3,
        endTime: 5
      },
      {
        startTime: 4,
        endTime: 8
      },
      {
        startTime: 10,
        endTime: 12
      },
      {
        startTime: 9,
        endTime: 10
      }
    ];
    const expectedResult = [{
        startTime: 0,
        endTime: 1
      },
      {
        startTime: 3,
        endTime: 8
      },
      {
        startTime: 9,
        endTime: 12
      },
    ]

    expect(mergeRanges(problemRanges)).to.be.eql(expectedResult)
  })
  it("Given some mixed up values it will sort appropriately", function () {
    const input = [{
      startTime: 9, endTime: 12
    }, {
      startTime: 3,
      endTime: 8
    }, {
      startTime: 1,
      endTime: 5
    }, {
      startTime: 2,
      endTime: 4
    }];
    const expectedResult = [{
      startTime: 1,
      endTime: 8
    }, {
      startTime: 9,
      endTime: 12
    }];
    expect(mergeRanges(input)).to.be.eql(expectedResult);
  })
})

function changeCalcator (amount, denominations) {
  this.resultSets = {};
  
  denominations.sort();
  let ret = knapsack(denominations, amount, this.resultSets)
  console.log(ret)

  this.setCount = Object.keys(this.resultSets).length;
  return this;
}

function knapsack(item, iter, maxBen, resultSet) {
  if (value < 0 )
    return 0;
  else if (value === 0)
    return 1;

  resultSet[iter] = null; 

  return knapsack(n-1)
}

describe("changeCalcator Problem", function() {
  it("Test with 4 and 3 denominations", function () {
    let calculatedValue = changeCalcator(4, [1, 2, 3])
    expect(calculatedValue.resultSets).to.deep.eql({
      1: [1,1,1,1],
      2: [1,1,2],
      3: [1,3],
      4: [2,2]
    })
    expect(calculatedValue.setCount).to.eql(4);
  })
})
