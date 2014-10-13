var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();



/*var assert = require("assert")
var expect = require("chai").expect
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})


 * Check Writing
 *
 * Given an Number representing money -- $1234.56 -- convert
 * that into it's string representation in English words. For
 * example, 1234.56 is "one thousand, two hundred thirty four
 * and 56/100s", just like you would see on a check.
 *
 * In a lot of ways, this is the inverse of the "String Calculator"
 * problem, so a lot of what you've learned there will be put into
 * practice here, but backwards. Hooray!
 */

/**
 * Sample Data:
 *
 * $ 1234.56 => "one thousand, two hundred thirty four and 56/100s"
 * $ 123.45  => "one hundred twenty three and 45/100s"
 * $ 12.34   => "twleve and 34/100s"
 * $ 1.23    => "one and 23/100s"
 *
 * EXTRA CREDIT!
 *
 * $ 12,345,678.90 =>
 * "twelve million, three hundred fourty five thousand, six hundred
 *   seventy eight and 90/100s"
 *
 * Make up your own, too.
 */

function num2Words(money) {

  var value = money.toString();  //This take the input value of (money) and converts it to a string using the (.toString) code

  value = Number(value).toFixed(2); //This takes the variable named value and applies a decimal point to the fixed values using (.toFixed)

  var dollars = value.slice(0,-3); // This slices out the values from in index 0 (the first number) to -3 (where the decimal is located in this example) and hold value until we call it

  var cents = value.slice(-2); // This takes the numbers at the -2 place and holds it to be called on later. You can slice off at whatever point you want to specify in the parenthesis.

  var cents2Words = "dollars & " + cents + "/100s";  // This concatenates the num2Words value with the string("dollars") AND the variable(Cents) AND the string("/100s")

//Create an array that holds the Word value that maps to the Number value

var ones = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve",
"thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];

var tens = ["zero","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];

var hundreds = ["zero","one hundred","two hundred","three hundred","four hundred","five hundred",
"six hundred","seven hundred","eight hundred","nine hundred"];

var thousands = ["zero","one hundred","two hundred","three hundred","four hundred","five hundred",
"six hundred","seven hundred","eight hundred","nine hundred"];

//Conditional statments below

if (money < 20)

  return ones[dollars] + " " + cents2Words;     //This returns the array of ones


if (money < 100) { // if money is less than 100


 if (money % 10 === 0) {  // if money has remainder of 0 when divided by 10. Modulus works as a divide operation too

return tens[value[0]] + " " + cents2Words;

}

return tens[value[0]] + " " + ones[ value[1]] + cents2Words;
}


if (money < 1000) {

  if (money % 100 === 0) {

  return hundreds[value[0]] + " " + cents2Words;
  }
}

if (money % 10 === 0){

   return hundreds[value[0]] + " " + tens[value[1]] + cents2Words;
}
if (value[1] < 2) {

  return hundreds[ value[0]] + " " + tens[value[2]] + cents2Words;
}
return hundreds[value[0]] + " " + tens[value[1]] + " " + ones[value[2]] + cents2Words;



 if (money < 10000) {
            if (money % 1000 === 0){

              return(thousands[value[0]]+ cents2Words);}

            if (money % 100 === 0) {

              return(thousands[value[0]] +" "+ hundreds[value[1]] + cents2Words);}

            if (money % 10 === 0) {

              return(thousands[value[0]] +" "+ hundreds[value[1]] +" "+ tens[value[2]] + cents2Words);}

            if (value[1] < 1) {

              return(thousands[value[0]] + " " + tens[value[2]] + " " + ones[value[3]] + cents2Words);}

            if (value[2] < 2) {return

            (thousands[value[0]] +" "+ hundreds[value[1]] +" "+ tens[value[3]] + cents2Words);}

            return(thousands[value[0]] +" "+ hundreds[value[1]] +" "+ tens[value[2]] +" "+ ones[value[3]] + centsWords)
 }
}







/*==Tests==
assert(1, "one dollars & 00/100s");
assert(50,"fifty dollars & 00/100s");
assert(500,"five hundred dollars & 00/100s");
assert(9000,"nine thousand dollars & 00/100s");*/

describe('num2Words(), takes an input and returns a string',function(){
    it('should be a type of function named num2Words',function(){
        assert.typeOf(num2Words,'function');
    });

 });
