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
Adds the given elements to the end of the array. It returns the new length:
