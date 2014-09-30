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
  
 if (a==="two" && b==="two")
{return 4;}
  
if (a=="two")
{return 3;}


}


console.log('it should add "one" and "one"',
add  ("one" , "one")===2);
console.log('it should add "two" and "one"',
add ("two", "one")===3);
console.log('it should add "two" and "two"',
add ("two", "two")===4);
console.log('it should add "three" and "two" ', 
add("three" , "two")===5);
