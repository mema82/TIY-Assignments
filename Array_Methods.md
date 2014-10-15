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

/*GENERIC METHODS

Sometimes you would like to apply array methods to strings or other array-like
objects (such as function arguments). By doing this, you treat a string as an
array of characters (or otherwise treat a non-array as an array). For example,
in order to check that every character in the variable str is a letter,
you would write:
*/
