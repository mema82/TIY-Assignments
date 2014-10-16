var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

function sqofSum(limit) {
//Give numbers
//add the numbers together
//square the result of adding all numbers


var sum = 0

for (var i = 0; i < limit; i++) {

  sum = i + sum

}

return sum * sum

}



describe('sqofSum',function( ){
it('should return square of the sum of given number',function(){

  //assert.equal(sqofSum(11),3025);
  assert.equal(sqofSum(6), 225);

  })
})
