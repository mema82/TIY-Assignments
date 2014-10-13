var expect = require('chai').expect;

var CheckWriting = {

 toEnglish: function(value){

    return 'one';
 }
}

it('should have a `toEnglish` function', function(){
  expect(CheckWriting.toEnglish).to.be.a('string');
});
