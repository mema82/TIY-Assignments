var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();

/**
 * String Calculator PING PONG STYLE
 *
 * Given two strings like "one", "two", and "three" that
 * represent numbers, calculate the product of those numbers
 * and return the result.
 */


var num2Letters= function(number){
    if (number=== 1){

        return "one";
}

if (number=== 2){
  return "two";
}

if (number=== 3){
  return "three";
}

if(number===4){
  return "four";
}

if(number===5){
  return "five";
}

if(number===6){
  return "six";
}

if(number===7){
  return "seven";
}

if(number===8){
  return "eight";
}

if(number===9){
  return "nine";
}

if(number===0){
  return "zero";
}

}



/*console.log('it should convert 1 to "one"',
num2Letters(1)=== "one");

console.log('it should convert 2 to "two"',
num2Letters(2)=== "two");

console.log('it should convert 3 to "three"',
num2Letters(3)=== "three");

console.log('it should convert 4 to "four"',
num2Letters(4)=== "four");

console.log('it should convert 5 to "five"',
num2Letters(5)=== "five");

console.log('it should convert 6 to "six"',
num2Letters(6)=== "six");

console.log('it should convert 7 to "seven"',
num2Letters(7)=== "seven");

console.log('it should convert 8 to "eight"',
num2Letters(8)=== "eight");

console.log('it should convert 9 to "nine"',
num2Letters(9)=== "nine");

console.log('it should convert 0 to "zero"',
num2Letters(0)=== "zero");*/
<<<<<<< HEAD

describe('num2Letters(), takes an input and returns a string',function(){
    it('should be a type of function named num2Letters',function(){
        assert.typeOf(num2Letters,'function');
    });

 });

it('should return "two" when given 2', function(){
        assert.strictEqual(num2Letters(2),"two");
    });

=======
>>>>>>> 977de6589591d3f25f6a1557f7e2e8cb3b8d7927

describe('num2Letters(), takes an input and returns a string',function(){
    it('should be a type of function named num2Letters',function(){
        assert.typeOf(num2Letters,'function');
    });

 });

it('should return "two" when given 2', function(){
        assert.strictEqual(num2Letters(2),"two");
    });
    
  )