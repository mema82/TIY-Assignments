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
* prototype = objects (?)
* constructor = push (?)

```javascript
6. usage: function () {
	return pc.string.format("{0} - total: {1}, used: {2}",
	this.name, this.total, this.used);
```

* Variable: `count`
* Value: Number 0



```javascript
7. format: function (s) {
	var i = 0,
```

* Variable: `count`
* Value: Number 0


```javascript
8. startsWith: function (s, subs) {
	return (s.indexOf(subs) === 0);},
```

* Variable: `count`
* Value: Number 0
*


```javascript
9. toBool: function (s, strict) {
	if (s === 'true') {
	return true;}
```

* Variable: `count`
* Value: Number 0


```javascript
10. ar Mat3 = function () {

        this.data = new Float32Array(9);
```

* Variable: `count`
* Value: Number 0


Road Trip 1 & 2


```javascript
11. Basic Operations (+, -, *,/,%)

```

* what do these do?


```javascript
12. Boolean Expressions (T , F)

```

* what do these do?

```javascript
13.Strings  (“”, ‘ ‘)

```

* what do these do?


```javascript
14. Concatenation (.)

```

* what do these do?

```javascript
15. Length

```

* what do these do?

```javascript
16. Variables

```

* what do these do?

```javascript
17. Console

```

* what do these do?

```javascript
18.  Expressions

```

* what do these do?

```javascript
19.  Conditions

```

* what do these do?

```javascript
20.  Special Characters ( /t) advances to next tab.

```

* what do these do?


10 More examples (from general reading) (to complete 30 total)

21. ```javascript
Numbers
All numbers in JavaScript are floating point (although most JavaScript engines internally also use integers
```

1 === 1.0
    true

22. ```javascript

String Methods
Fonction that lives inside the string
```
 'mjölnir'.toUpperCase()
    'MJÖLNIR'

    'abc'.indexOf('b')  // find a string
    1


```javascript
23.  Arbitrary property keys
A property key can be any string. So far, we have seen property keys in object literals and after the dot operator. (Roughly) you can only use them that way if they are identifiers. If you want to use other strings as keys, you have to quote them in an object literal and use square brackets to get and set the property:
```
    var obj = { 'not an identifier': 123 };
     obj['not an identifier']
    123
    obj['not an identifier'] = 456;

24. ```javascript
Math is an object with arithmetic functions.
```
Examples:
    Math.abs(-2)
    2

     Math.pow(3, 2)  // 32
    9

 25. ```javascript
 Strict mode
Strict mode enables checks and a few other measures that make JavaScript a slightly cleaner language. It is recommended to use it. To do so, make this the first line of a JavaScript file or a script tag:
 ```
 'use strict';

26. ```javascript
 ForEach
iterates over an array and hands the current element and its index to a function:
```

    [ 'a', 'b', 'c' ].forEach(
        function (elem, index) {  // (*)
            console.log(index + '. ' + elem);
        });

27.
```javascriptArray Literals
Array literals are handy for creating arrays:
var arr = [ 'a', 'b', 'c' ];
```

28. ```javascriptArray Literals
Array.prototype.shift()
Removes the element at index 0 and returns it. The indices of subsequent elements are decremented by 1:
```
 var arr = [ 'a', 'b' ];
 arr.shift()
'a'
>arr
[ 'b' ]


29. ```javascript
Array Literals
Array.prototype.pop()
Removes the last element of the array and returns it:
```

var arr = [ 'a', 'b' ];
arr.pop()
'b'
arr
[ 'a' ]



30. ```javascript

Array.prototype.push(elem1?, elem2?, ...)
Adds the given elements to the end of the array. It returns the new length:
```
 var arr = [ 'a', 'b' ];
arr.push('c', 'd')
4
 arr
[ 'a', 'b', 'c', 'd' ]
