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
//I think an inital board is setup by defining ALL its pieces and their colors


function Chess(player) { //constructor
}
//testing ideas
//var Chess1= "Player1";
//var Chess2= "Player2";



//PlAYER 1's pieces

var wPawn = new Pawn("white");
function Pawn(Player){
this.Player   =  Player;
}

var wKnight = new Knight("white");
function Knight(Player){
this.Player   =  Player;
}

var wBishop = new Bishop("white");
function Bishop(Player){
this.Player   =  Player;
}


var wRook = new Rook("white");
function Rook(Player){
this.Player   =  Player;
}

var wQueen = new Queen("white");
function Queen(Player){
this.Player   =  Player;
}

//PLAYER 2's pieces

var bPawn = new Pawn("black");
function Pawn(Player){
this.Player   =  Player;
}

var bKnight = new Knight("black");
function Knight(Player){
this.Player   =  Player;
}

var bBishop = new Bishop("black");
function Bishop(Player){
this.Player   =  Player;
}


var bRook = new Rook("black");
function Rook(Player){
this.Player   =  Player;
}

var bQueen = new Queen("black");
function Queen(Player){
this.Player   =  Player;
}




//Just some tests
//console.log(Chess); //Returns that this is a function
//console.log(wQueen); //Returns Player "white"
//console.log(bQueen);  //Returns Player "black"


/*@method getPlayer()
@return String either "white" or "black" representing current player*/


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




//console.log(wQueen.getPlayer()); //Returns White
//console.log(bRook.getPlayer()); //Returns Black
//console.log(bPawn.getPlayer()); //Returns Black


//@method move(piece, destination): Move piece to destination and...?
