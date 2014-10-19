var assert = require('chai').assert
var expect = require('chai').expect

/*var _ = require('lodash');
var _ = require('lodash/dist/lodash.underscore');
*/
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

//@constructor Chess: Setup a board with Pieces representing an initial chessboard.

/*
var pawn = new Pawn("White_Pawn");
function Pawn(Player){
this.Player   =  Player;
}
//console.log(Pawn);

var knight = new Knight("White_Knight");
function Knight(Player){
this.Player   =  Player;
}
//console.log(Knight);

var bishop = new Bishop("White_Bishop");
function Bishop(Player){
this.Player   =  Player;
}

var rook = new Rook("White_Rook");
function Rook(Player){
this.Player   =  Player;
}

var queen = new Queen("White_Queen");
function Queen(Player){
this.Player   =  Player;
}





/*@method getPlayer()
@return String either "white" or "black" representing current player*/
/*
Pawn.prototype.getPlayer = function() {

  return this.Player
}

Knight.prototype.getPlayer = function() {

  return this.Player
}

Bishop.prototype.getPlayer = function() {

  return this.Player
}


Rook.prototype.getPlayer = function() {

  return this.Player
}

Queen.prototype.getPlayer = function() {

  return this.Player
}

//console.log(pawn.getPlayer());
//console.log(knight.getPlayer());
//console.log(bishop.getPlayer());
//console.log(rook.getPlayer());
//console.log(queen.getPlayer());

*/
//@method move(piece, destination): Move piece to destination and...?

//var color = 'white';

function Chess()
{

 //var color = '';


var pawn = function(Player) {
this.Player  =  'Pawn';
this.color   = 'black';
}


var c = new Chess();

console.log(this.Player); // should be pawn
