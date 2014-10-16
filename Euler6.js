var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

function sqofSum(limit) {
//Give numbers
//add the numbers together
//square the result of adding all numbers


/*var sum = 0

for (var i = 0; i < limit; i++) {

  sum = i + sum

}

return sum * sum

}
*/


function answer( ) {

  return {
    sqSum: function( ){
      var sum100 = 0;
  for(i=1; i<==100; i++){
      sum100 += i;
  }


sum100 = Math.pow(sum100,2);
  return sum100
};

//END OF SUM SQUARES

sumSq: funtion( ){
  var sq100 = 0;
  for(i=1; i<=100; i++) {

    sq100 += Math.pow(i,2);

  }
    return sq100
    }

  }// END Return

}//END Answer

console.log(answer)().diff())//


describe('sqSum',function( ){
it('should return square of the sum of given number',function(){

  //assert.equal(sqofSum(11),3025);
  assert.equal(sqofSum(6), 225);

  })
})

dedscribe('sqSum', function(){
//   it('squares the sum of natural numbers 1-10', function(){
//     assert.equal(answer().sqSum(), 3025)
//   })
//   it('sums the squares of natural numbers 1-10', function(){
//     assert.equal(answer().sumSq(), 385)
//   })
//   it('finds difference of sum100 and sq100', function(){
//   assert.equal(answer().diff(), 2640)
