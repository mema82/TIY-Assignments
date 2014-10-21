```javascript
1. var ObjectPool = function (constructor, options) {   //code inside parenthesis must be evaluated be for continuing
	this.objects = [];
```

* Variable: ObjectPool
* function : function expression
* argument: (constructor, options)
* Operator = assignment (=) , Key (.)
* constructor = array[ ]


```javascript
2. ObjectPool.prototype = {
_construct: function(constructor, args)
```

* Object = ObjectPool
* key = _construct
* value = function(constructor, args)


```javascript
3. var promise = new pc.promise.Promise(function (resolve, reject)
//A function expression produces a value and can thus be used to
//directly pass functions as arguments to other functions
```

* Variable = promise
* operator = assignment (=) , key (.)
* function = function expression
* argument = (resolve, reject)



```javascript
4.  allocate: function () {
	var object;
	if (this.objects.length)
```

* Key =  allocate
* Value: function
* var = object
* conditional statement = if
* object = this
* prototype = objects (?)
* property = length



```javascript
5. free: function(object) {
	this.objects.push(object);
```


* Dictionary = free
* Value: function(object)
* object = this
* key = objects, push


```javascript
6. usage: function () {
	return pc.string.format("{0} - total: {1}, used: {2}",
```

* Dictionary: Usage
* Value: function
* object = pc
* key = string , format


```javascript
7. format: function (s) {
	var i = 0,
```

* dictionary: format
* Value: function (s) , 0
* variable =i
* operator =assignment (=)


```javascript
8. startsWith: function (s, subs) {
	return (s.indexOf(subs) === 0);},
```

* dictionary = startsWith
* Value: function
* arguments = (s, subs)
* operator= strict equal (===)

```javascript
9. toBool: function (s, strict) {
	if (s === 'true') {
	return true;}
```

* dictionary = toBool
* Value: function (s, strict)
* operator = strict equal (===)


```javascript
10. ar Mat3 = function () {
this.data = new Float32Array(9);
```

* function = ar Mat3
* object = this
* keys = data
* integer = 9


Road Trip 1 & 2


```javascript
11. Basic Operations
```
addition (+)
subtraction (-)
multiplication (*)
division (/)
modulous (%)


```javascript
12. Boolean Expressions
```
return values = True or False

```javascript
13.Strings
```
single or double quotes (''), ("")


```javascript
14. Concatenation
```
joins string (.)

```javascript

15. Length
```

* property = length is a property of an object

```javascript
16. Variables

```

* A place holder where a value can be stored

```javascript
17. Console

```

* object = The console object provides access to the browser's debugging console

```javascript
18.  Expressions

```

* function expressions = refers to the current function inside the function body
* regular expressions = patterns used to match character combinations in strings

```javascript
19.  Conditions

```

* Logical operator = "if", "else" statements

```javascript
20.  Special Characters
```  

\t = advances to next tab.
\b = Backspace
\n = line feed (new line)
\v = vertical tab
\f = form feed
\r = carriage return
\" = double quotation marks
\' = single quotation marks
\\ = backslash


10 More examples (from general reading) (to complete 30 total)

21. ```javascript
Numbers
```
All numbers in JavaScript are floating point (although most JavaScript engines internally also use integers


22. ```javascript

String Methods
```
Function that lives inside the string

```javascript
23.  Arbitrary property keys
```
A property key can be any string. So far, we have seen property keys in object literals and after the dot operator. (Roughly) you can only use them that way if they are identifiers. If you want to use other strings as keys, you have to quote them in an object literal and use square brackets to get and set the property:


24. ```javascript
Math
```
Math is an object with arithmetic functions.

 25. ```javascript
 Strict mode
 ```
Strict mode enables checks and a few other measures that make JavaScript a slightly cleaner language. It is recommended to use it. To do so, make this the first line of a JavaScript file or a script tag:


26. ```javascript
 ForEach
```

iterates over an array and hands the current element and its index to a function:


27.
```javascript
Array Literals
```
Array literals are handy for creating arrays:


28. ```javascript

Array.prototype.shift()
```
 Removes the element at index 0 and returns it. The indices of subsequent elements are decremented by 1:


29. ```javascript
Array.prototype.pop()
```

Removes the last element of the array and returns it:



30. ```javascript

Array.prototype.push
```
Adds the given elements to the end of the array. It returns the new length


//ARRAY METHODS

/*MUTATOR METHODS
These methods modify the array*/

```javascript
Array.prototype.copyWithin()
Copies a sequence of array elements within the array.
```
example:
arr.copyWithin(target, start[, end = this.length])


```javascript
Array.prototype.fill()
fills all the elements of an
array from a start index to an end index wiTH a Static value.
```

example:
arr.fill(value[, start = 0[, end = this.length]])

```javascript
Array.prototype.pop()
Removes the last element from an array and returns that element.
```

example:
arr.pop()


```javascript
Array.prototype.push()
Adds one or more elements to the end of an array and returns the New length of the array.
```
example:
arr.push(element1, ..., elementN)


```javascript
Array.prototype.reverse()
Reverses the order of the elements of an array, the first becomes the last,
and the last becomes the first.
```
example:

arr.reverse()

```javascript
Array.prototype.shift()
Removes the first element from an array and Returns that element.
```
example:

arr.shift()


```javascript
Array.prototype.sort()
Sorts the elements of an array In place and returns the array.
```
example:

arr.sort([compareFunction])

```javascript
Array.prototype.splice()
Adds and/or removes elements from an array.
```
example:

array.splice(index, howMany[, element1[, ...[, elementN]]])

```javascript
Array.prototype.unshift()
Adds one or more elements to the front of an array and returns the New length of the array.
```
example:

arr.unshift([element1[, ...[, elementN]]])


/*Accessor methods
These methods do not modify the array and return some representation of the array*/


```javascript
Array.prototype.concat()
Returns a New array comprised of This array joined With other array(s) and/or value(s).
```
example:

var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])


```javascript
Array.prototype.contains()
Determines whether an array contains a certain element, returning t or f as appropriate.
```

example:

array.contains(searchElement[, fromIndex])

```javascript
Array.prototype.join()
Joins all elements of an array into a string.
```

example:

str = arr.join([separator = ','])


```javascript
Array.prototype.slice()
Extracts a section of an array and returns a nEw array.
```

example:

arr.slice([begin[, end]])


```javascript
Array.prototype.toSource()
Returns an array literal representing the specified array; you can use thIs value to create a nEw array. Overrides the object.Prototype.ToSource() method.
```

example:

arr.toSource()

```javascript
Array.prototype.toString()
Returns a string representing the array and its elements. Overrides the object.Prototype.tostring() method.
```

example:

arr.toString()

```javascript
Array.prototype.toLocaleString()
Returns a localized string representing the array and its elements. Overrides the object.Prototype.tOLocaleString() method.
```
example:

arr.toLocaleString();


```javascript
Array.prototype.indexOf()
Returns the first (least) index of an element within the array equal to the specified value, or negitive one If none is found.
```

example:

arr.indexOf(searchElement[, fromIndex = 0])

```javascript
Array.prototype.lastIndexOf()
Returns the last (greatest) index of an element within the array equal to the specified value, or negative one If none is found.
```

example:

arr.lastIndexOf(searchElement[, fromIndex = arr.length])

/*ITERATION METHODS

Definition to come*/

```javascript
Array.prototype.forEach()
Calls a Func For each element In the array.
```
example:

arr.forEach(callback[, thisArg])


```javascript
Array.prototype.entries()
Returns a New array Iterator object that contains the key/value pairs For each index In the array.
```

example:

arr.entries()

```javascript
Array.prototype.every()
Returns T If every element In This array satisfies the provided testing Func.
```

example:

arr.every(callback[, thisArg])

```javascript
Array.prototype.some()
Returns T If at least one element In This array satisfies the provided testing func.
```

example:

arr.some(callback[, thisArg])

```javascript
Array.prototype.filter()
Creates a New array With all of the elements of This array For which the provided filtering func returns True.
```

example:

arr.filter(callback[, thisArg])


```javascript
Array.prototype.find()
Returns the found value In the array, If an element In the array satisfies the provided testing func or undefind iF not found.
```

example:

arr.find(callback[, thisArg])

```javascript
Array.prototype.findIndex()
Returns the found index In the array, If an element In the array satisfies the provided testing func or negaitve one iF not found.
```

example:

arr.findIndex(callback[, thisArg])

```javascript
Array.prototype.keys()
Returns a New array Iterator that contains the keys For each index In the array.
```

example:

arr.keys()

```javascript
Array.prototype.map()
Creates a New array With the results of calling a provided func on every element In This array.
```

example:

arr.map(callback[, thisArg])


```javascript
Array.prototype.reduce()
Apply a func against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.
```

example:

arr.reduce(callback[, initialValue])

```javascript
Array.prototype.reduceRight()
Apply a func against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.
```
example:

arr.reduceRight(callback[, initialValue])

```javascript

GENERIC METHODS

These methods pertain to "array-like" objects, such as
argument and strings, which have a numeric length property
and corresponding non-negative inter properties. They do not
inherit from Array.prototype and therefore cannot invoke
the array methods (described above) directly, but can be
invoked indirectly using the Function.call.method.
```


example:

var a = {"0":"a". "1":"b", "2":"c", length:3};
// An array-like object
Array.prototype.join.call(a, "+") // => "a+b+c"


/* 10 more JAVASCRIPT OBJECTS
Look for:
*Capitalized function definitions (Constructors)
*using the new keyword
*all them prototypes everywhere
*/


1. function Foo (bar) {

	this.bar = bar; //Default values
	this.baz = 'baz'; //Default values
}



object: Foo
Type: keyword
Name: "function foo"
Meaning: created an identifier

Symbol: 'baz'
Type: Type Literal
Name: "string baz"
Meaning: Create a literal String value containing "baz"

Symbol: =
Type: Operator
Name: "is assigned"
Meaning: Stores the value to the right on the identifier to the left
Operands: function Foo (bar)


2. Foo.Prototype.fooBar= Foo; // class method

Method: Specifies the function that creates an object's prototype
symbol: period (.)
name: key
meaning: provides access to specified object



3. var object = new Foo('Hello'); //constructor call

Symbol: var
Type: Keyword
Name: "var"
Meaning: Creates an identifier
Operands: new Foo


4. var Scene = function Scene() {
        this.drawCalls = [];
        this.shadowCasters = [];


Type: var
Name: "function Scene"
Meaning: creates constructor


5. Scene.prototype.getModels = function ()


Method: Specifies the function that creates an object's prototype
symbol: period (.)
name: key
meaning: provides access to specified object


6. var lights = model.getLights();


Name: variable
Keyword: var
Name: lights
Meaning:  an object that can hold a variety of inputs


7. clone: function ()

Object: Dictionary
Name: clone
Key: function()


8. update: function ()

Object: Dictionary
Name: update
key: function()

9. updateShader: function (device)

object: Dictionary
Name: updateShader
key: function()



10 Picker.prototype.prepare = function (camera, scene)

Method: Specifies the function that creates an object's prototype
symbol: period (.)
name: key
meaning: provides access to specified object
parameters: (camera, scene)
