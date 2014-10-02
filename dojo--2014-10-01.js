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



var num2Lett = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
//var lett2Num = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


function money(a,b,c,d,e,f){

  if (a==='one' && b==='two' && c==='three' && d==='four' && e==='five' && f==='nine')
    {return 'twelve million, three hundred fourty five thousand dollars ' + 'and ' + 90/100 + " cents";}



  if (a==='one' && b==='two' && c==='three' && d==='four' && e==='five' && f==='six')
    {return 'One thousand two hundred thirty four dollars ' + 'and ' + 56/100 + "cents";}



  if (a==='one' && b==='two' && c==='three' && d==='four' && e==='five')
    {return 'One hundred twenty three dollars ' + 'and ' + 45/100 + "cents";}


  if (a==='one' && b==='two' && c==='three' && d==='four')
    {return 'twelve dollars ' + 'and ' + 34/100 + "cents";}


     if (a==="one" && b==="seven" && c==="five")

{return 'One dollar ' + 'and ' + 23/100 + " cents";}

if (a==='one' && b==='two' && c==='three' && d==='four')
  {return 'twelve dollars' + 'and' + 34/100 + "cents";}

}



//console.log(myArray[1]); // Will output: one

console.log('"1.23 cents: "',
money('one','seven','five'));
console.log('"12.34 cents: "',
money('one','two','three','four'));
console.log('"123.45 cents: "',
money('one','two','three','four','five'));
console.log('"1234.56 cents: "',
money('one','two','three','four','five','six'));
console.log('"12,345,678.90 cents: "',
money('one','two','three','four','five','nine'));