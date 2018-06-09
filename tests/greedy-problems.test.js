const chai = require('chai');
const expect = chai.expect;

const gasStationDistances = [24,50,85,90,124,170,190];
const miles = 220;
function farthestGasStation (gasStationDistances) {
    let bestDistance = gasStationDistances[0]
    let milesTraveled = [];
    gasStationDistances.forEach((distance) => {
        if (distance < miles) {
            bestDistance = Math.max(prevFarDistance, distance)
        } else {
            milesTraveled.push(bestDistance);
            bestDistance = 0;
        }
    })
    return milesTraveled; 
    
}

describe("", function (){
    before("", function () {

    })
    it("", function () {

    })
})

