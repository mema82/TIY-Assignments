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


module.exports = Chess, Position, Piece;

//@constructor Chess: Setup a board with Pieces representing an initial chessboard.
//I think an inital board is setup by defining ALL its pieces and their colors

var points = {

  'King': 0,
  'Pawn': 1,
  'Bishop': 3,
  'Knight': 3,
  'Rook': 5,
  'Queen': 9
}




function Chess() {

  this.pieces = [];

  moveTotal = 0;
  this.turn = 1;

  collection = [

  [this.K,  'King'  , 'Black',0,4]
  [this.Q,  'Queen' , 'Black',0,3]
  [this.R1, 'Rook'  , 'Black',0,0]
  [this,R2, 'Rook' , 'Black' ,0,7]
  [this.N1, 'Knight', 'Black',0,1]
  [this.N2, 'Knight', 'Black',0,6]
  [this.B1, 'Bishop', 'Black',0,2]
  [this.B2, 'Bishop', 'Black',0,5]
  [this.P1, 'Pawn' ,  'Black',1,0]
  [this.P2, 'Pawn' ,  'Black',1,1]
  [this.P3, 'Pawn' ,  'Black',1,2]
  [this.P4, 'Pawn' ,  'Black',1,3]
  [this.P5, 'Pawn' ,  'Black',1,4]
  [this.P6, 'Pawn' ,  'Black',1,5]
  [this.P7, 'Pawn' ,  'Black',1,6]
  [this.P8, 'Pawn' ,  'Black',1,7]



  [this.k,  'King'  , 'White',7,4]
  [this.q,  'Queen' , 'White',7,3]
  [this.r1, 'Rook'  , 'White',7,0]
  [this.r2, 'Rook'  , 'White',7,7]
  [this.n1, 'Knight', 'White',7,1]
  [this.n2, 'Knight', 'White',7,6]
  [this.b1, 'Bishop', 'White',7,2]
  [this.b2, 'Bishop', 'White',7,5]
  [this.p1, 'Pawn'  , 'White',6,0]
  [this.p2, 'Pawn'  , 'White',6,1]
  [this.p3, 'Pawn'  , 'White',6,2]
  [this.p4, 'Pawn'  , 'White',6,3]
  [this.p5, 'Pawn'  , 'White',6,4]
  [this.p6, 'Pawn'  , 'White',6,5]
  [this.p7, 'Pawn'  , 'White',6,6]
  [this.p8, 'Pawn'  , 'White',6,7]
  ]



self = this;
  collection.forEach(function(piece, index){
      self.pieces.push(piece[0] = new Piece(piece[1], piece[2]))
      piece[0].setPosition([piece[3], piece[4]])
  })

}//END Chess



Chess.prototype.getPlayer = function(item){
  if(item === item.toLowerCase()){
     return 'White';
  }
     return 'Black';
}

//@param Piece piece to move
//@param Position destination to move piece to
//Move piece to destination and...?
Chess.prototype.move = function (piece, destination){
  moveTotal++
  self.pieces.forEach(function(value, index){
    if (self.pieces[index].position[0] === piece[0] && self.pieces[index].position[1] === piece[1]){

      self.pieces[index].position = destination;

      console.log('Move ' + moveTotal + ': ' + self.pieces[index].color + ' ' + self.pieces[index].name + ' to '+ destination);
      console.log(Chess.prototype.display());
    }
  })
}

Chess.prototype.opening = function (){
  this.move([6,3],[4,3]);
  this.move([0,6],[2,5]);
  this.move([6,2],[4,2]);
  this.move([1,4],[2,4]);
  this.move([6,6],[5,6]);
  this.move([1,3],[3,3]);
  this.move([7,5],[6,6]);
  this.move([0,5],[1,4]);
  this.move([7,6],[5,5]);
}

Chess.prototype.display = function(){

  Array.matrix = function(numrows, numcols, initial){
     var arr = [];
     for (var i = 0; i < numrows; ++i){
        var columns = [];
        for (var j = 0; j < numcols; ++j){
           columns[j] = initial;
        }
        arr[i] = columns;
      }
      return arr;
  }

  var board = Array.matrix(8,8,0);

  self.pieces.forEach(function(value, index){
    var x = self.pieces[index].position[0];
    var y = self.pieces[index].position[1];
    board[x][y] = self.pieces[index].letter;
  })
  var spacer = '+---+---+---+---+---+---+---+---+\n';
    return spacer +
        board.map(function renderRow(row){
          return '| ' +
              row.map(function renderPosition(position){
                    if(position === 0){
                      return ' ';
                    }
                    else{
                      return position;
                    }
              }).join(' | ')
          + ' |\n';
        }).join(spacer)
    + spacer;
}




//Represent a position on a chessboard with coordinates
function Position(x, y) {
  this.x = x;
  this.y = y;
  return [x,y];
}//END Position

function Piece(name, color){
  this.name = name;
  this.color = color;
  this.letter = this.toString()
}//END Piece

//@return String name of Piece, e.g. 'Queen', 'Pawn'
Piece.prototype.getName = function (){
  return this.name;
}

//@return String player 'black' or 'White'
Piece.prototype.getColor = function (){
  return this.color;
}

//@param Position position
Piece.prototype.setPosition = function (position){
  this.position = position;
}

//@return String representation of Piece
Piece.prototype.toString = function (){
  if( this.name === "Queen") {
    if(this.color === "Black") {
      return "Q";
    } else {
      return "q"
    }
  }
  if( this.name === "Bishop") {
    if(this.color === "Black") {
      return "B"
    } else {
      return "b"
    }
  }
  if( this.name === "Rook") {
    if(this.color === "Black") {
      return "R"
    } else {
      return "r"
    }
  }
  if( this.name === "King") {
    if(this.color === "Black") {
      return "K"
    } else {
      return "k"
    }
  }
  if( this.name === "Knight") {
    if(this.color === "Black") {
      return "N"
    } else {
      return "n"
    }
  }
  if( this.name === "Pawn") {
    if(this.color === "Black") {
      return "P"
    } else {
      return "p"
    }
  }
}
