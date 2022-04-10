const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
/*function totalBatteries(array) {
  let totalPrice = 0;

  for (const element of array) {
    totalPrice += element;
  };

  return totalPrice;
}
*/

const totalBatteries = batteryBatches.reduce(function(accumulator, element){ return element + accumulator}, 0)


/*
const sinon = require( 'sinon' )

describe('reducer', function() {
  describe('batteries', function() {
    it('should have a `totalBatteries` variable', function() {
      expect(totalBatteries).to.exist;
    });

    it('should have a number as a result', function() {
      expect(totalBatteries).to.be.a('number');
    });

    it('should have made the sum of all the assembled batteries', function() {
      expect(totalBatteries).to.eql(31);
    });
  });
});
*/