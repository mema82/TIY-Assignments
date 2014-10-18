var expect = require('chai').expect

var ralph ={name: 'Ralph' , gender: 'm'}
var fabi = {name: 'Fabi', gender:   'f'}
var dave = {name: 'Dave', gender:   'm'}



var pluck = function(collection, property){ //Pluck value holds 2 args of collection & property

  var plucked =[ ]  //This is an empty array to put in the result of 'plucked' AFTER the forEach is ran

collection.forEach(function(element, index, arrray){ //This looks in each of the collection properties using the forEach(function(element, index, array)

  plucked.push(element[property]) // This takes the result of plucked and PUSHES it into the property value

  return element[property]// This returns the element property of pushed

})

  return plucked // This returns the plucked values

}

describe('the pluck function', function(){

it('should give back an array of strings when the property being plucked is a string',function(){

var collection = [ralph, fabi, dave]

expect(pluck(collection, 'gender')).to.deep.eq(['m', 'f', 'm']);

      });

});

 remove = function(collection, callback){

  var removed = [ ];

collection.forEach(function(element, index, arrray){

    if(callback(element) === true) {

    removed.push(element)

  })

  return removed
}


describe('the remove function', function(){

  it('returns an array of numbers for which a call back function is true', function() {

    var collection = [1,2,3,4]
    var callback = function(n) {return true}
    expect(remove(collection, callback)).to.deep.eq([1,2,3,4]);
  });

  it('returns the even numbers of an array when the callback is true only for evens', function(){

      var collection = [1,2,3,4]
      var callback = function(n) {

        if(n % 2 === 0){

          return true
        }

        expect(remove(collection,callback)).to.deep.eq([2,4])
      }
  });

});
