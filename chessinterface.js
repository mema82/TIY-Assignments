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

var whiteQueen = new Queen("White");
function Queen(Player){
this.Player   =  Player;
}


/*@method getPlayer()
@return String either "white" or "black" representing current player*/

Queen.prototype.getPlayer = function() {

  return this.Player
}



console.log(whiteQueen.getPlayer());
























/*var Bishop = {color: 'white'}
var Knight = {color: 'white'}
var Rook   = {color: 'white'}
var Queen  = {color: 'white'}
var pawn   = {color: 'black'}
var bishop = {color: 'black'}
var knight = {color: 'black'}
var rook   = {color: 'black'}
var queen  = {color: 'black'}

*/

//console.log(Chess)





//Chess.prototype.getPlayer = function(){

//  return this.Pawn
//}
