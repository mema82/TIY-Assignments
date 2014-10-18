var assert = require('chai').assert
var expect = require('chai').expect

var _ = require('lodash');
var _ = require('lodash/dist/lodash.underscore');

//multi-dimensional array

/*var board = [
  ['R','N','B','Q','K','B','N','R'],
  ['P','P','P','P','P','P','P','P'],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  ['p','p','p','p','p','p','p','p'],
  ['r','n','b','q','k','b','n','r']
            ];


*/

//p = black and P = white
//var chess = function chess() { };




//pieces reping board n values
/*chess.prototype.pawn   = {value: 1}
chess.prototype.knight = {value: 3}
chess.prototype.bishop = {value: 3}
chess.prototype.rook   = {value: 5}
chess.prototype.queen  = {value: 9}
*/


//Relate name to a piece value_map?



/*
var pawn ={name: 'pawn' , value: '1'}
var knight={name:'knight', value: '3'}
var bishop={name:'bishop', value: '3'}
var rook={name:'rook', value: '5'}
var queen={name:'queen', value: '9'}

console.log(pawn);
console.log(knight);
console.log(bishop);
console.log(bishop.value);
console.log(queen.value);
*/



//console.log(chess.constructor == chess); //true
//console.log(chess.prototype.pawn.value);
//console.log(chess.prototype.rook.value);
//console.log(chess.prototype.rook.color);
//console.log(chess);
//console.log(chess.prototype.rook);
//console.log(white);




//var chess = new chess();


//@return String either "white" or "black" representing current player
//chess.prototype.getplayer()

//var w = "white";
//var b = "black";


//console.log(w);
//console.log(b);


//Move piece to destination and Piece piece to move
//Position destination to move piece to
//chess.prototype.move = function (piece , destination)


//Advance the board to Catalan Opening, Closed Variation
//chess.prototype.opening = function ()



//return String representation of board
//chess.prototype.display = function()




//Represent a position on a chessboard with coordinates
//function position (x,y)


/*Represent a chesspiece on the board with name and color
and appropriate starting position*/

//function piece (name , color)


//new piece('Queen', 'black')

//return String name of Piece, e.g. 'Queen', 'Pawn'
//piece.prototype.getName = function()


//return String player 'black' or 'white'
//piece.prototype.getColor = function()



//Set Piece to position on board
//piece.prototype.setPosition = function(position)



/*return String representation of Piece
example: "Q" === String(new Piece("Queen", "white"))
example: "r" === String(new Piece("Rook", "black"))
*/

//piece.prototype.toString()


var myChess = new Chess();

var piecesObj = {},
  piecesFunc = function () {},
    piecesString = "a string";

// setting the values
myChess.set(piecesString, "value associated with 'a string'");
myChess.set(piecesObj, "value associated with keyObj");
myChess.set(piecesFunc, "value associated with keyFunc");

myChess.size; // 3

// getting the values
myChess.get(piecesString);    // "value associated with 'a string'"
myChess.get(piecesObj);       // "value associated with keyObj"
myChess.get(piecesFunc);      // "value associated with keyFunc"

myChess.get("a string");   // "value associated with 'a string'"
                         // because keyString === 'a string'
myChess.get({});           // undefined, because keyObj !== {}
myChess.get(function() {}) // undefined, because keyFunc !== function () {}

console.log(myChess);
