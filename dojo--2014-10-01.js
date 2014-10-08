var assert = require('assert');

function test(actual, expected, success){
    success = success || 'pass!';

    assert(actual === expected) || console.log(success);
}

/**
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

function num2Words(money)

var value = money.toString();  //This take the input value of (money) and converts it to a string using the (.toString) code
value = Number(value).toFixed(2); //This takes the variable named value and applies a decimal point to the fixed values using (.toFixed)
var cents = value.slice(-2); // This takes the numbers at the -2 place and holds it to be called on later. You can slice off at whatever point you want to specify in the parenthesis.
 
var cents2Words = "dollars & " + cents + "/100s";  // This concatenates the num2Words value with the string("dollars") AND the variable(Cents) AND the string("/100s")

//Create an array that holds the Word value that maps to the Number value

var one = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve",
"thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"]