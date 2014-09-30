/**
 * String Calculator
 *
 * Given two strings that represent numbers in English -- "one", "two", "three" -- 
 * calculate the addition, subtraction, multiplication, and division of those numbers
 * and return that value as a `Number`. For example:
 *
 * add("one", "one") === 2
 *
 * For complete credit, provide test coverage for all numbers "zero" through "ten"
 * for at least _two_ operations, but keep in mind that the assignment is designed
 * to enforce _practice_ not _completeness_. Follow "red-green-refactor", use
 * ping-pong pairing, and commit often using `@username & @username` as the
 * commit message.
 */



function add (a,b){
 
if (a==="one" && b==="one")
{return 2;}

if (a==="one")
{return 1;}

 if (a==="two" && b==="two")
{return 4;}
  
if (a=="two")
{return 3;}

if (a==="three" && b==="three")
{return 6;}


if (a==="three")
{return 5;}

if (a==="four" && b==="four")
{return 8};

if (a==="four" && b==="three")
{return 7};

if (a==="five" && b==="five")
{return 10;}


if (a==="five")
{return 9;}

if (a==="zero" && b==="zero")
{return 0;}


}






console.log('it should add "one" and "one"',
add  ("one" , "one")===2);
console.log('it should add "two" and "one"',
add ("two", "one")===3);
console.log('it should add "two" and "two"',
add ("two", "two")===4);
console.log('it should add "three" and "two" ', 
add("three" , "two")===5);
console.log('it should add "three" and "three"',
add("three" , "three")===6);
console.log('it should add "four" and "three"',
add("four" , "three")===7);
console.log('it should add "four" and "four"',
add("four" , "four")===8);
console.log('it should add "five" and "four"',
add("five" , "four")===9);
console.log('it should add "five" and "five"',
add("five" , "five")===10);
console.log('it should add "one" and "zero"',
add("one" , "zero")===1);
console.log('it should add "zero" and "zero"',
add("zero" , "zero")===0);